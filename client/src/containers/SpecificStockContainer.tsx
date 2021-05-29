import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setNotification } from "../actions/notificationAction";
import Spinner from "../components/Spinner";
import { colors } from "../consts/colors";
import { formatChart } from "../helpers/chart";
import { translations } from "../i18n/translation";
import SpecificStockScreen from "../screens/SpecificStockScreen";
import firebase from "firebase";
import { firebaseCollections } from "../consts/firebaseEnv";
import { priceFormater } from "../helpers/priceFormater";
import { useForm } from "react-hook-form";
import { fetchChartData } from "../helpers/axios";

export interface ChartData {
  x: number;
  y: number;
}

interface Fields {
  amount: string;
  price: string;
}

export const stockPurchaseFields = {
  amount: "amount",
  price: "price",
};

const SpecificStockContainer = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const { control, handleSubmit, setValue } = useForm();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [chartData, setChartData] = React.useState<ChartData[]>([]);
  const currentValue = React.useMemo(
    () =>
      chartData.length ? priceFormater(chartData[chartData.length - 1].y) : "0",
    [chartData]
  );
  const dispatch = useDispatch();
  const currentUserUid = React.useMemo(
    () => firebase.auth().currentUser?.uid,
    []
  );

  React.useEffect(() => {
    fetchChartData(symbol)
      .then((response) => {
        const timestamp = response.data.chart.result[0].timestamp;
        const marketClosedValues = formatChart(
          response.data.chart.result[0].indicators.quote[0].close,
          timestamp
        );
        if (marketClosedValues) {
          setChartData(Object.values(marketClosedValues));
        }
      })
      .catch(() => {
        dispatch(
          setNotification({
            text: translations.error_while_reading_data,
            color: colors.error,
          })
        );
      });
  }, [symbol, dispatch]);

  const addToWishList = React.useCallback(async () => {
    try {
      //ne valja
      let nextIndex: number = 0;
      await firebase
        .firestore()
        .collection(`${firebaseCollections.FAVORITES}-${currentUserUid}`)
        .doc(nextIndex.toString())
        .set({
          symbol,
        });
      setIsModalVisible(false);
      dispatch(
        setNotification({
          text: translations.successfully_added_to_wishlist,
          color: colors.success,
        })
      );
      nextIndex++;
    } catch (error) {
      dispatch(
        setNotification({
          text: translations.something_went_wrong,
          color: colors.error,
        })
      );
    }
  }, [currentUserUid, symbol, dispatch]);

  const buyStock = React.useCallback(
    async (data: Fields) => {
      try {
        //ne valja
        let nextIndex: number = 0;
        await firebase
          .firestore()
          .collection(`${firebaseCollections.BUYED_STOCK}-${currentUserUid}`)
          .doc(nextIndex.toString())
          .set({
            symbol,
            price: data.price,
            amount: data.amount,
          });
        dispatch(
          setNotification({
            text: translations.successfully_buyed_stock,
            color: colors.success,
          })
        );
        nextIndex++;
      } catch (error) {
        dispatch(
          setNotification({
            text: translations.something_went_wrong,
            color: colors.error,
          })
        );
      }
    },
    [currentUserUid, symbol, dispatch]
  );

  const setAmount = (value: string) => {
    const currentPrice = chartData[chartData.length - 1].y;
    setValue(
      stockPurchaseFields.amount,
      Math.round((parseFloat(value) / currentPrice) * 100) / 100
    );
  };

  const setPrice = (value: string) => {
    const currentPrice = chartData[chartData.length - 1].y;
    setValue(
      stockPurchaseFields.price,
      Math.round(currentPrice * parseFloat(value) * 100) / 100
    );
  };

  return chartData.length ? (
    <SpecificStockScreen
      chartData={chartData}
      stockName={symbol}
      isModalVisible={isModalVisible}
      currentValue={currentValue}
      control={control}
      setPrice={setPrice}
      setAmount={setAmount}
      inevertModalState={() => setIsModalVisible((curr) => !curr)}
      addToWishList={addToWishList}
      buyStock={handleSubmit(buyStock)}
    />
  ) : (
    <Spinner />
  );
};

export default SpecificStockContainer;

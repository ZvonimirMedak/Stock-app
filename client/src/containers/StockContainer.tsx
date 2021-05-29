import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setNotification } from "../actions/notificationAction";
import Spinner from "../components/Spinner";
import { colors } from "../consts/colors";
import { favoritesParams } from "../consts/headers/favorites";
import { mostTradedParams } from "../consts/headers/mostTraded";
import { AllStocks, FavoriteStock, PurchasedStock } from "../consts/interfaces";
import { fetchFavorites, fetchMostTraded } from "../helpers/api";
import { goToSpecificStock } from "../helpers/navigation";
import { translations } from "../i18n/translation";
import StockScreen from "../screens/StockScreen";
import firebase from "firebase";

export enum PaginationStep {
  POSITIVE = 1,
  NEGATIVE = -1,
}

export enum ScreenType {
  MOST_TRADED = "MOST_TRADED",
  FAVORITES = "FAVORITES",
  PURCHASED = "PURCHASED",
}

interface Props {
  screenType: ScreenType;
}

const StockContainer = (props: Props) => {
  const [stocks, setStcoks] = React.useState<
    AllStocks[] | PurchasedStock[] | FavoriteStock[]
  >([]);
  const [spinner, setSpinner] = React.useState<boolean>(true);
  const stocksRef = React.useRef<
    AllStocks[] | PurchasedStock[] | FavoriteStock[]
  >([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const page = React.useRef<number>(1);
  const history = useHistory();

  React.useEffect(() => {
    firebase
      .firestore()
      .collection(`favorites-${firebase.auth().currentUser?.uid}`)
      .get()
      .then((doc) => {
        const favorites = doc.docs.map((el) => el.data());
      });
  }, []);

  const fetchData = React.useCallback(async () => {
    try {
      if (props.screenType === ScreenType.MOST_TRADED) {
        await fetchMostTraded(stocksRef, setStcoks);
      } else if (props.screenType === ScreenType.FAVORITES) {
        await fetchFavorites(stocksRef, setStcoks);
      } else {
      }
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      dispatch(
        setNotification({
          text: translations.something_went_wrong,
          color: colors.fireBrick,
        })
      );
    }
  }, [props.screenType, dispatch]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleViewMorePress = React.useCallback(
    (item: AllStocks) => {
      goToSpecificStock(history, item.symbol);
    },
    [history]
  );

  const loadData = React.useCallback((step: PaginationStep) => {
    const nextStep = page.current + step;
    if (nextStep >= 1 && stocksRef.current.length > 100 * nextStep) {
      const start = nextStep * 100;
      const end = (nextStep + 1) * 100;
      const stockPreview = stocksRef.current.slice(start, end);
      page.current = page.current + step;
      setStcoks(stockPreview);
    }
  }, []);

  const tableParams = React.useMemo(() => {
    if (props.screenType === ScreenType.FAVORITES) {
      return favoritesParams;
    } else if (props.screenType === ScreenType.MOST_TRADED) {
      return mostTradedParams;
    }
    return mostTradedParams;
  }, [props.screenType]);

  const screenTitle = React.useMemo(() => {
    if (props.screenType === ScreenType.FAVORITES) {
      return t(translations.favorites);
    } else if (props.screenType === ScreenType.MOST_TRADED) {
      return t(translations.most_traded);
    }
    return t(translations.user_stocks);
  }, [props.screenType, t]);

  const removeStock = React.useCallback((uuid: string) => {
    console.log(uuid);
  }, []);

  return !spinner ? (
    <StockScreen
      stocks={stocks}
      tableParams={tableParams}
      title={screenTitle}
      removeStock={removeStock}
      loadData={loadData}
      handleViewMorePress={handleViewMorePress}
    />
  ) : (
    <Spinner />
  );
};

export default StockContainer;

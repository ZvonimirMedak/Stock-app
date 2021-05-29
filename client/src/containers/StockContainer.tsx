import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setNotification } from "../actions/notificationAction";
import { colors } from "../consts/colors";
import { allStocksParams } from "../consts/headers/allStocks";
import { AllStocks, PurchasedStock } from "../consts/interfaces";
import { fetchMostTraded } from "../helpers/api";
import { goToSpecificStock } from "../helpers/navigation";
import { translations } from "../i18n/translation";
import StockScreen from "../screens/StockScreen";

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
    AllStocks[] | PurchasedStock[] | string[]
  >([]);
  const allStocksRef = React.useRef<AllStocks[] | PurchasedStock[] | string[]>(
    []
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const page = React.useRef<number>(1);
  const history = useHistory();

  const tableParams = React.useMemo(() => {
    return allStocksParams;
  }, []);
  const screenTitle = React.useMemo(() => {
    return t(translations.most_traded);
  }, [t]);
  const fetchData = React.useCallback(async () => {
    try {
      if (props.screenType === ScreenType.MOST_TRADED) {
        await fetchMostTraded(allStocksRef, setStcoks);
      } else if (props.screenType === ScreenType.FAVORITES) {
      }
    } catch (error) {
      dispatch(
        setNotification({ text: "something_went_wrong", color: colors.error })
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
    if (nextStep >= 1) {
      const start = nextStep * 100;
      const end = (nextStep + 1) * 100;
      const stockPreview = allStocksRef.current.slice(start, end);
      page.current = page.current + step;
      setStcoks(stockPreview);
    }
  }, []);

  return (
    <StockScreen
      stocks={stocks}
      tableParams={tableParams}
      title={screenTitle}
      loadData={loadData}
      handleViewMorePress={handleViewMorePress}
    />
  );
};

export default StockContainer;

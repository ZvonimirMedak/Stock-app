import React from "react";
import MostTradedScreen from "../screens/MostTradedScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import { setAllStocks } from "../actions/allStocksAction";
import { useHistory } from "react-router";
import { goToSpecificStock } from "../helpers/navigation";
import { AllStocks } from "../consts/interfaces";
import Spinner from "../components/Spinner";

export enum PaginationStep {
  NEGATIVE = -1,
  POSITIVE = 1,
}

const MostTradedContainer = () => {
  const state = useSelector((state: State) => state.allStocks);
  const dispatch = useDispatch();
  const allStocksRef = React.useRef<AllStocks[]>([]);
  const page = React.useRef<number>(1);
  const history = useHistory();
  React.useEffect(() => {
    if (!state.allStocks.length) {
      axios
        .get(
          "https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&format=json",
          {
            headers: {
              "x-rapidapi-key":
                "d61a1eb47fmsh0d8daf8b10d2ab6p183bd9jsn351c8602f81b",
              "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
            },
          }
        )
        .then((response) => {
          allStocksRef.current = response.data.data;
          dispatch(setAllStocks(response.data.data.slice(0, 100)));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [dispatch, state.allStocks.length]);

  const handleViewMorePress = React.useCallback(
    (item: AllStocks) => {
      goToSpecificStock(history, item.symbol);
    },
    [history]
  );

  const loadData = React.useCallback(
    (step: PaginationStep) => {
      const nextStep = page.current + step;
      if (nextStep >= 1) {
        const start = nextStep * 100;
        const end = (nextStep + 1) * 100;
        const stockPreview = allStocksRef.current.slice(start, end);
        page.current = page.current + step;
        dispatch(setAllStocks(stockPreview));
      }
    },
    [dispatch]
  );

  if (state.allStocks.length !== 0) {
    return (
      <MostTradedScreen
        allStocks={state.allStocks}
        loadData={loadData}
        handleViewMorePress={handleViewMorePress}
      />
    );
  }
  return <Spinner />;
};

export default MostTradedContainer;

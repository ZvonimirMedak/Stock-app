import axios from "axios";
import React from "react";
import { AllStocks, PurchasedStock } from "../consts/interfaces";

export const fetchChartData = async (symbol: string) => {
  return axios.request({
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart",
    params: { interval: "5m", symbol: symbol, range: "1d", region: "US" },
    headers: {
      "x-rapidapi-key": "d61a1eb47fmsh0d8daf8b10d2ab6p183bd9jsn351c8602f81b",
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  });
};

export const fetchMostTraded = async (
  allStocksRef: React.MutableRefObject<
    AllStocks[] | PurchasedStock[] | string[]
  >,
  setStocks: React.Dispatch<
    React.SetStateAction<AllStocks[] | PurchasedStock[] | string[]>
  >
) => {
  try {
    const response = await axios.get(
      "https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&format=json",
      {
        headers: {
          "x-rapidapi-key":
            "d61a1eb47fmsh0d8daf8b10d2ab6p183bd9jsn351c8602f81b",
          "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
        },
      }
    );
    allStocksRef.current = response.data.data;
    setStocks(response.data.data.slice(0, 100));
  } catch (error) {
    throw error;
  }
};

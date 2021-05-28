import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import Spinner from "../components/Spinner";
import { formatChart } from "../helpers/chart";
import SpecificStockScreen from "../screens/SpecificStockScreen";

export interface ChartData {
  x: number;
  y: number;
}

const SpecificStockContainer = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [chartData, setChartData] = React.useState<ChartData[]>([]);
  React.useEffect(() => {
    axios
      .request({
        method: "GET",
        url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart",
        params: { interval: "5m", symbol: symbol, range: "1d", region: "US" },
        headers: {
          "x-rapidapi-key":
            "d61a1eb47fmsh0d8daf8b10d2ab6p183bd9jsn351c8602f81b",
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      })
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
      .catch((error) => {
        console.error(error);
      });
  }, [symbol]);

  return chartData.length ? (
    <SpecificStockScreen chartData={chartData} stockName={symbol} />
  ) : (
    <Spinner />
  );
};

export default SpecificStockContainer;

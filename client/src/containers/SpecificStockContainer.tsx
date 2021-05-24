import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import SpecificStockScreen from "../screens/SpecificStockScreen";

const SpecificStockContainer = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [chartData, setChartData] = React.useState<number[]>([]);
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
        setChartData(response.data.timestamp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (chartData.length) return <SpecificStockScreen chartData={chartData} />;
  return null;
};

export default SpecificStockContainer;

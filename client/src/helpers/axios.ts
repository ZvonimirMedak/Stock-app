import axios from "axios";

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

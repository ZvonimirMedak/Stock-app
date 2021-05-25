import { Box } from "@material-ui/core";
import React from "react";
//@ts-ignore
import { CanvasJSChart } from "canvasjs-react-charts";
import { ChartData } from "../containers/SpecificStockContainer";
import { chartOptions } from "../helpers/chart";

interface Props {
  chartData: ChartData[];
  stockName: string;
}

const SpecificStockScreen = (props: Props) => {
  const options = React.useMemo(
    () => chartOptions(props.chartData, props.stockName),
    [props.chartData, props.stockName]
  );
  return (
    <Box>
      <CanvasJSChart options={options} />
    </Box>
  );
};

export default SpecificStockScreen;

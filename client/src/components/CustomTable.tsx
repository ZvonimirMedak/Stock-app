import { Box, makeStyles, TableBody } from "@material-ui/core";
import React from "react";
import { ParamsInterface } from "../consts/headers/params";
import ReactList from "react-list";
import CellRow from "./CellRow";
import { AllStocks } from "../consts/interfaces";
interface Props {
  data: any[];
  tableParams: ParamsInterface;
  handleButtonPress: (item: AllStocks) => void;
}

const CustomTable = (props: Props) => {
  const { tableParams, data, handleButtonPress } = props;
  const keys = React.useMemo(() => Object.keys(tableParams), [tableParams]);
  const classes = useClasses();

  return (
    <Box className={classes.mainContainer}>
      <ReactList
        length={data.length}
        type="uniform"
        pageSize={20}
        itemsRenderer={(items: any, refs: any) => (
          <TableBody innerRef={refs}>{items}</TableBody>
        )}
        itemRenderer={(index: number) => (
          <CellRow
            key={`Cell-${index}`}
            index={index}
            data={data}
            tableParams={tableParams}
            keys={keys}
            handleButtonPress={handleButtonPress}
          />
        )}
      />
    </Box>
  );
};

const useClasses = makeStyles({
  mainContainer: {
    overflow: "auto",
    tableLayout: "fixed",
    borderCollapse: "separate",
    maxHeight: "66vh",
  },
});

export default CustomTable;

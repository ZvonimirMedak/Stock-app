import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { colors } from "../consts/colors";
import { ParamsInterface } from "../consts/headers/params";
import { AllStocks } from "../consts/interfaces";
import CustomCell from "./CustomCell";

interface Props {
  index: number;
  keys: Array<string>;
  data: any[];
  tableParams: ParamsInterface;
  handleButtonPress: (item: AllStocks) => void;
}

const CellRow = (props: Props) => {
  const { index, keys, tableParams, data, handleButtonPress } = props;
  const classes = useClasses();
  return (
    <Box key={index} className={classes.rowDirection}>
      {keys.map((key, ind) => {
        return (
          <CustomCell
            key={`Cell${index}-${ind}`}
            width={tableParams[key].width}
            cellType={tableParams[key].cellType}
            buttonValue={tableParams[key].buttonValue}
            val={data[index][key]}
            textAlign={tableParams[key].textAlign}
            handleButtonPress={() => handleButtonPress(data[index])}
          />
        );
      })}
    </Box>
  );
};

const useClasses = makeStyles({
  rowDirection: {
    display: "flex",
    paddingBottom: "5%",
    paddingTop: "5%",
    alignItems: "center",
    borderBottom: `1px solid ${colors.white}`,
    width: "100%",
    justifyContent: "space-between",
  },
});

export default CellRow;

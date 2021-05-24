import { TableRow } from "@material-ui/core";
import React from "react";
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
  return (
    <TableRow key={index}>
      {keys.map((key, ind) => {
        return (
          <CustomCell
            key={`Cell${index}-${ind}`}
            width={tableParams[key].width}
            cellType={tableParams[key].cellType}
            buttonValue={tableParams[key].buttonValue}
            val={data[index][key]}
            handleButtonPress={() => handleButtonPress(data[index])}
          />
        );
      })}
    </TableRow>
  );
};

export default CellRow;

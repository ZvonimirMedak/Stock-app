import { makeStyles, TableCell } from "@material-ui/core";
import React from "react";
import { colors } from "../consts/colors";
import { CellType } from "../consts/headers/params";
import ButtonCell from "./ButtonCell";

interface Props {
  cellType: CellType;
  width: string;
  val: string;
  buttonValue?: string;
  customStyle?: string;
  handleButtonPress?: () => void;
}

function CustomCell(props: Props) {
  const classes = useClasses();
  if (props.cellType === CellType.Text) {
    return (
      <TableCell
        className={`${classes.textStyle}`}
        style={{
          width: props.width,
          maxWidth: props.width,
          minWidth: props.width,
        }}
      >
        {props.val}
      </TableCell>
    );
  }
  if (props.cellType === CellType.Button) {
    if (props.buttonValue && props.handleButtonPress)
      return (
        <ButtonCell
          buttonValue={props.buttonValue}
          width={props.width}
          handleButtonPress={props.handleButtonPress}
        />
      );
  }

  return <TableCell></TableCell>;
}

const useClasses = makeStyles({
  textStyle: {
    fontWeight: 500,
    color: colors.white,
  },
});

export default React.memo(CustomCell, (curr, next) => {
  return curr.val === next.val;
});

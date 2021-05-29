import { Box, Button, makeStyles } from "@material-ui/core";
import React from "react";
import { colors } from "../consts/colors";

interface Props {
  buttonValue: string;
  width: string;
  handleButtonPress: () => void;
}

const ButtonCell = (props: Props) => {
  const classes = useClasses();
  return (
    <Box
      style={{
        width: props.width,
        maxWidth: props.width,
        minWidth: props.width,
      }}
    >
      <Button
        classes={{ root: classes.buttonRoot }}
        className={classes.buttonTextStyle}
        onClick={props.handleButtonPress}
      >
        {props.buttonValue}
      </Button>
    </Box>
  );
};

const useClasses = makeStyles({
  buttonRoot: {
    backgroundColor: colors.white,
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: colors.white,
    },
  },
  buttonTextStyle: {
    fontWeight: "bold",
  },
});

export default ButtonCell;

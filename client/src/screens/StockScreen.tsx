import React from "react";
import { Box, IconButton, makeStyles } from "@material-ui/core";
import { colors } from "../consts/colors";
import Header from "../components/Header";
import { AllStocks, FavoriteStock, PurchasedStock } from "../consts/interfaces";
import CustomTable from "../components/CustomTable";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { ParamsInterface } from "../consts/headers/params";
import { PaginationStep } from "../containers/StockContainer";

interface Props {
  stocks: AllStocks[] | PurchasedStock[] | FavoriteStock[];
  tableParams: ParamsInterface;
  title: string;
  removeStock: (uuid: string) => void;
  loadData: (step: PaginationStep) => void;
  handleViewMorePress: (item: AllStocks) => void;
}

const MostTradedScreen = (props: Props) => {
  const {
    stocks,
    tableParams,
    title,
    handleViewMorePress,
    loadData,
    removeStock,
  } = props;
  const classes = useClasses();

  const MemoizedTable = React.useMemo(() => {
    if (stocks.length) {
      return (
        <CustomTable
          tableParams={tableParams}
          data={stocks}
          removeStock={removeStock}
          handleButtonPress={handleViewMorePress}
        />
      );
    }
    return null;
  }, [stocks, tableParams, handleViewMorePress, removeStock]);

  return (
    <Box className={classes.mainContainer}>
      <Header title={title} />
      {MemoizedTable}
      <Box className={classes.iconPosition}>
        <IconButton onClick={() => loadData(PaginationStep.NEGATIVE)}>
          <ArrowLeftIcon fontSize="large" htmlColor={colors.white} />
        </IconButton>
        <IconButton onClick={() => loadData(PaginationStep.POSITIVE)}>
          <ArrowRightIcon fontSize="large" htmlColor={colors.white} />
        </IconButton>
      </Box>
    </Box>
  );
};

const useClasses = makeStyles({
  mainContainer: {
    backgroundColor: colors.bgColor,
    height: "100vh",
  },
  iconPosition: {
    display: "flex",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
});

export default MostTradedScreen;

import React from "react";
import { Box, IconButton, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { colors } from "../consts/colors";
import Header from "../components/Header";
import { translations } from "../i18n/translation";
import { AllStocks } from "../consts/interfaces";
import CustomTable from "../components/CustomTable";
import { allStocksParams } from "../consts/headers/allStocks";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { PaginationStep } from "../containers/MostTradedContainer";

interface Props {
  allStocks: AllStocks[];
  loadData: (step: PaginationStep) => void;
  handleViewMorePress: (item: AllStocks) => void;
}

const MostTradedScreen = (props: Props) => {
  const { allStocks, handleViewMorePress } = props;
  const { t } = useTranslation();
  const classes = useClasses();

  const MemoizedTable = React.useMemo(() => {
    if (allStocks.length) {
      return (
        <CustomTable
          tableParams={allStocksParams}
          data={allStocks}
          handleButtonPress={handleViewMorePress}
        />
      );
    }
    return null;
  }, [allStocks, handleViewMorePress]);

  return (
    <Box className={classes.mainContainer}>
      <Header title={t(translations.most_traded)} />
      {MemoizedTable}
      <Box className={classes.iconPosition}>
        <IconButton onClick={() => props.loadData(PaginationStep.NEGATIVE)}>
          <ArrowLeftIcon fontSize="large" htmlColor={colors.white} />
        </IconButton>
        <IconButton onClick={() => props.loadData(PaginationStep.POSITIVE)}>
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

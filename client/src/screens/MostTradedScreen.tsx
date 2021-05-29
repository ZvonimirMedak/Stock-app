import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { colors } from "../consts/colors";
import Header from "../components/Header";
import { translations } from "../i18n/translation";
import { AllStocks } from "../consts/interfaces";
import CustomTable from "../components/CustomTable";
import { allStocksParams } from "../consts/headers/allStocks";

interface Props {
  allStocks: AllStocks[];
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
          hasPagination={true}
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
    </Box>
  );
};

const useClasses = makeStyles({
  mainContainer: {
    backgroundColor: colors.bgColor,
    height: "100vh",
  },
});

export default MostTradedScreen;

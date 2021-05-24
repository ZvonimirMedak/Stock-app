import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { colors } from "../consts/colors";
import { translations } from "../i18n/translation";

const UserTradesScreen = () => {
  const classes = useClasses();
  const { t } = useTranslation();
  return (
    <Box className={classes.mainContainer}>
      <Header title={t(translations.user_stocks)} />
    </Box>
  );
};

const useClasses = makeStyles({
  mainContainer: {
    backgroundColor: colors.bgColor,
    height: "100vh",
  },
});

export default UserTradesScreen;

import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { colors } from "../consts/colors";
import { useTranslation } from "react-i18next";
import { translations } from "../i18n/translation";
import Header from "../components/Header";

const FavoritesScreen = () => {
  const classes = useClasses();
  const { t } = useTranslation();
  return (
    <Box className={classes.mainContainer}>
      <Header title={t(translations.my_favorite_stocks_title)} />
    </Box>
  );
};

const useClasses = makeStyles({
  mainContainer: {
    backgroundColor: colors.bgColor,
    height: "100vh",
  },
});

export default FavoritesScreen;

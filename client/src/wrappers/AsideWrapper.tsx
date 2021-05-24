import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { OneRoute, routesNames } from "../consts/routeNames";
import { useLocation } from "react-router";
import { getActiveIndex } from "../helpers/routing";
import Route from "../components/Route";
import { dimensions } from "../consts/dimensions";
import SettingsIcon from "@material-ui/icons/Settings";
import { colors } from "../consts/colors";
//import firebase from "firebase";

interface Props {
  authentificationToken: string;
}

const AsideWrapper = (props: Props) => {
  const classes = useClasses();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);
  const [activeRoute, setActiveRoute] = React.useState<number>(0);
  const location = useLocation();

  React.useEffect(() => {
    setIsDrawerOpen(false);
    setActiveRoute(getActiveIndex(location));
  }, [location]);

  const Routes = React.useMemo(
    () =>
      Object.values(routesNames).map((el: OneRoute, index: number) => (
        <Route
          route={el}
          index={index}
          key={`${el.path}-route`}
          activeRoute={activeRoute}
          isActive={activeRoute === index}
        />
      )),
    [activeRoute]
  );

  /*   const handleClick = React.useCallback(() => {
    firebase.auth().signOut();
  }, []); */

  if (props.authentificationToken) {
    return (
      <>
        <div
          onClick={() => setIsDrawerOpen((prev) => !prev)}
          className={classes.iconButton}
        >
          <div
            className={classes.hamburger}
            style={{
              transform: !isDrawerOpen ? "rotate(30deg)" : "rotate(0deg)",
            }}
          />
          <div
            className={classes.hamburger}
            style={{ opacity: !isDrawerOpen ? 0 : 1 }}
          />
          <div
            className={classes.hamburger}
            style={{
              transform: !isDrawerOpen ? "rotate(-30deg)" : "rotate(0deg)",
            }}
          />
        </div>
        <aside
          className={classes.aside}
          style={{
            transform: !isDrawerOpen
              ? "translateX(0px)"
              : `translateX(-${dimensions.asideWidth})`,
            opacity: !isDrawerOpen ? 1 : 0,
          }}
        >
          <Box className={classes.asideItemsPosition}>
            <Box className={classes.routesPosition}>{Routes}</Box>
            <SettingsIcon fontSize="large" className={classes.settings} />
          </Box>
        </aside>
      </>
    );
  }
  return null;
};

const useClasses = makeStyles({
  aside: {
    width: dimensions.asideWidth,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 20,
    borderRight: `1px inset ${colors.white}`,
    overflowY: "auto",
    transition: "all 0.7s",
    backgroundColor: colors.bgColor,
  },
  asideItemsPosition: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  routesPosition: {
    marginTop: 80,
  },
  settings: {
    cursor: "pointer",
    marginBottom: 40,
    color: colors.white,
  },
  iconButton: {
    position: "absolute",
    left: `calc((${dimensions.asideWidth}/2) - 16px)`,
    zIndex: 100,
    top: 10,
    cursor: "pointer",
  },
  hamburger: {
    border: `2px solid ${colors.white}`,
    width: "32px",
    margin: 5,
    transition: "all 0.7s",
    transformOrigin: "left",
  },
});

export default AsideWrapper;

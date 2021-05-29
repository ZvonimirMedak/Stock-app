import { colors } from "../colors";
import { ButtonType, CellType, ParamsInterface } from "./params";

export const favoritesParams: ParamsInterface = {
  symbol: {
    titleType: CellType.Text,
    title: "Naziv dionice",
    cellType: CellType.Text,
    width: "24vw",
  },

  delete: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "6vw",
    buttonValue: "Ukloni",
    textAlign: "right",
    buttonColor: colors.fireBrick,
    buttonType: ButtonType.REMOVE,
  },
  viewMore: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "7vw",
    buttonValue: "Vidi više",
    textAlign: "right",
    buttonType: ButtonType.VIEW_MORE,
  },
};

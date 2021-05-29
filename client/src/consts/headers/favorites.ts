import { CellType, ParamsInterface } from "./params";

export const favoritesParams: ParamsInterface = {
  symbol: {
    titleType: CellType.Text,
    title: "Naziv dionice",
    cellType: CellType.Text,
    width: "24vw",
  },
  viewMore: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "12vw",
    buttonValue: "Vidi više",
    textAlign: "right",
  },
};

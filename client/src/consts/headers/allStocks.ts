import { CellType, ParamsInterface } from "./params";

export const allStocksParams: ParamsInterface = {
  name: {
    titleType: CellType.Text,
    title: "Naziv dionice",
    cellType: CellType.Text,
    width: "20vw",
  },
  viewMore: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "10vw",
    buttonValue: "Vidi više",
  },
};

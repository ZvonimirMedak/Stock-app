import { colors } from "../colors";
import { ButtonType, CellType, ParamsInterface } from "./params";

export const purchasedParams: ParamsInterface = {
  name: {
    titleType: CellType.Text,
    title: "Naziv dionice",
    cellType: CellType.Text,
    width: "20vw",
  },
  amount: {
    titleType: CellType.Text,
    title: "Br. dionica",
    cellType: CellType.Text,
    width: "12vw",
    textAlign: "right",
  },
  price: {
    titleType: CellType.Text,
    title: "Uloženo $",
    cellType: CellType.Text,
    width: "16vw",
    textAlign: "right",
  },
  sell: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "16vw",
    buttonValue: "Prodaj",
    textAlign: "right",
    buttonColor: colors.success,
    buttonType: ButtonType.SELL,
  },
  viewMore: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "14vw",
    buttonValue: "Vidi više",
    textAlign: "right",
    buttonType: ButtonType.VIEW_MORE,
  },
};

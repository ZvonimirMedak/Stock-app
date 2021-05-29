import { colors } from "../colors";
import { ButtonType, CellType, ParamsInterface } from "./params";

export const purchasedParams: ParamsInterface = {
  name: {
    titleType: CellType.Text,
    title: "Naziv dionice",
    cellType: CellType.Text,
    width: "12vw",
  },
  amount: {
    titleType: CellType.Text,
    title: "Broj kupljenih dionica",
    cellType: CellType.Text,
    width: "12vw",
    textAlign: "right",
  },
  price: {
    titleType: CellType.Text,
    title: "Uloženi iznos $",
    cellType: CellType.Text,
    width: "12vw",
    textAlign: "right",
  },
  sell: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "6vw",
    buttonValue: "Prodaj",
    textAlign: "right",
    buttonColor: colors.success,
    buttonType: ButtonType.SELL,
  },
  viewMore: {
    titleType: CellType.Text,
    title: "",
    cellType: CellType.Button,
    width: "6vw",
    buttonValue: "Vidi više",
    textAlign: "right",
    buttonType: ButtonType.VIEW_MORE,
  },
};

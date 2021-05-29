export enum CellType {
  Text,
  Button,
}

export interface ParamsInterface {
  [key: string]: ParamInterface;
}

export interface ParamInterface {
  title: string;
  cellType: CellType;
  titleType: CellType;
  width: string;
  buttonValue?: string;
  textAlign?: "right" | "left";
}

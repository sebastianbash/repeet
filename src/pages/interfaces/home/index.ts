import { TFunction } from "i18next";

export interface HomeInterface {
  t: TFunction;
  children: JSX.Element | JSX.Element[];
}

import { StyleInfo } from "./types";
import { atom } from "recoil";

export const styleState = atom<StyleInfo>({
  key: "styleState",
});

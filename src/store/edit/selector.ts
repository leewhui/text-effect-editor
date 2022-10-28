import { RootState } from "../store";

export const getFontConfig = (root: RootState) => {
  return root.font;
}

export const getFontEffectType = (root: RootState) => {
  return root.font.effect.type;
}

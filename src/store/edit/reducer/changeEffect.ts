import { PayloadAction } from "@reduxjs/toolkit";
import { FontNamespace } from "../../../type/font";
import { EffectNamespace } from "../../../type/effect";

export const changeEffectAction = (state: FontNamespace.FontInterface, action: PayloadAction<EffectNamespace.EffectInterface>) => {
  state.effect = action.payload;
}

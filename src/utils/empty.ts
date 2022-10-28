import tinycolor from "tinycolor2";
import { EffectNamespace } from "../type/effect";

export const createEmptyEffect = (effect: EffectNamespace.EmptyEffectInterface, color: string) => {
  const { stroke } = effect;
  const rete = stroke / 100;
  const { r, g, b } = tinycolor(color).toRgb();
  const containerStyle = {
    WebkitTextStroke: `${0.5 + rete * 5}px rgb(${r}, ${g}, ${b})`,
    WebkitTextFillColor: 'transparent',
  };
  const fontStyle = {};

  return { containerStyle, fontStyle }
}

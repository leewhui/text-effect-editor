import tinycolor from "tinycolor2";
import { EffectNamespace } from "../type/effect";

export const createSpliceEffect = (effect: EffectNamespace.SpliceEffectInterface, color: string) => {
  const { direction, stroke } = effect;
  const rete = stroke / 100;
  const hex = tinycolor(color).toHex();
  const str = tinycolor(hex).lighten(15).toString();
  const { r, g, b } = tinycolor(str).toRgb();
  const rgb = tinycolor(color).toRgb();

  const offset = effect.offset / 10;

  const calculateOffset = () => {
    const radius = direction * (Math.PI / 180);
    const sin = Math.sin(radius);
    const cos = Math.cos(radius);

    const offsetX = cos * offset;
    const offsetY = sin * offset;
    return { offsetX, offsetY }
  }

  const { offsetX: x, offsetY: y } = calculateOffset();

  const containerStyle = {
    textShadow: `rgb(${r}, ${g}, ${b}) ${x}px ${y}px 0px`,
    WebkitTextStroke: `${0.5 + rete * 5}px rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    WebkitTextFillColor: 'transparent',
  };
  const fontStyle = {};
  return { containerStyle, fontStyle }
}

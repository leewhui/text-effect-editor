import { EffectNamespace } from "../type/effect";

export const createGlitchEffect = (effect: EffectNamespace.GlitchEffectInterface) => {
  const { direction, color1, color2 } = effect;
  const offset = effect.offset / 18;

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
    textShadow: `${color1} ${-x}px ${-y}px 0px, ${color2} ${x}px ${y}px 0px`,
  };
  const fontStyle = {};
  return { containerStyle, fontStyle }
}

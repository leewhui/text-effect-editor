import { EffectNamespace } from "../type/effect";

export const createBlurEffect = (effect: EffectNamespace.BlurEffectInterface) => {
  const { strangth } = effect;
  const rete = strangth / 100;
  const containerStyle = {
    textShadow: `rgba(0, 0, 0, 0.6) 0px 1px ${4 + 20 * rete}px`
  }
  const fontStyle = {};
  return { containerStyle, fontStyle }
}

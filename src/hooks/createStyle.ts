import { EffectNamespace } from "../type/effect";
import { createBlurEffect } from "../utils/blur";
import { createNeonEffect } from "../utils/neon";
import { createEmptyEffect } from "../utils/empty";
import { createSpliceEffect } from "../utils/splice";
import { createGlitchEffect } from "../utils/glitch";

export const useEffectStyle = (effect: EffectNamespace.EffectInterface, color: string): { containerStyle: Object, fontStyle: Object } => {
  if (effect.type === EffectNamespace.EffectType.BLUR) return createBlurEffect(effect as EffectNamespace.BlurEffectInterface)
  if (effect.type === EffectNamespace.EffectType.NEON) return createNeonEffect(effect as EffectNamespace.NeonEffectInterface, color);
  if (effect.type === EffectNamespace.EffectType.EMPTY) return createEmptyEffect(effect as EffectNamespace.EmptyEffectInterface, color);
  if (effect.type === EffectNamespace.EffectType.SPLICE) return createSpliceEffect(effect as EffectNamespace.SpliceEffectInterface, color);
  if (effect.type === EffectNamespace.EffectType.GLITCH) return createGlitchEffect(effect as EffectNamespace.GlitchEffectInterface);
  return { containerStyle: {}, fontStyle: {} };
}

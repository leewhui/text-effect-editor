export namespace EffectNamespace {
  export enum EffectType {
    SHADOWN = 'shadown',
    BLUR = 'blur',
    NEON = 'neon',
    BACKGROUND = 'background',
    GLITCH = 'glitch',
    SPLICE = 'slice',
    EMPTY = 'empty',
    NONE = 'none',
  }

  export interface EffectInterface {
    type: EffectType
  }

  export interface ShawdownEffectInterface extends EffectInterface {
    offset: number,
    direction: number,
    blur: number;
    transparent: number;
  }

  export interface EmptyEffectInterface extends EffectInterface {
    stroke: number
  }

  export interface BlurEffectInterface extends EffectInterface {
    strangth: number
  }

  export interface NeonEffectInterface extends EffectInterface {
    strangth: number
  }

  export interface BackgroundEffectInterface extends EffectInterface {
    radius: number,
    expand: number,
    transparent: number,
    color: string,
  }

  export interface GlitchEffectInterface extends EffectInterface {
    offset: number,
    direction: number,
    color1: string;
    color2: string;
  }

  export interface SpliceEffectInterface extends EffectInterface {
    stroke: number
    offset: number,
    direction: number,
  }
}

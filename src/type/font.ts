import { EffectNamespace } from './effect';

export namespace FontNamespace {
  export enum fontFamily { }

  export interface FontInterface {
    color: string;
    content: string;
    effect: EffectNamespace.EffectInterface;
  }
}

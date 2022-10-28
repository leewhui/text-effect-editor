import { FC, useEffect, useRef, useState } from 'react';
import { EffectNamespace } from '../../type/effect';
import styles from './inspector.module.less';
import { cloneDeep } from 'lodash';
import { SliderController } from '../../components/slider/slider';

interface InspectorGlitchInterface {
	effect: EffectNamespace.GlitchEffectInterface;
	onChange: (effect: EffectNamespace.GlitchEffectInterface) => void;
}

export const InspectorGlitch: FC<InspectorGlitchInterface> = (props) => {
	const { onChange } = props;

  const effect = useRef<EffectNamespace.GlitchEffectInterface>(props.effect);

  useEffect(() => {
    effect.current = props.effect;
  }, [props.effect]);

	const onChangeOffset = (offset: number) => {
		const cloneEffect = cloneDeep(effect.current);
		cloneEffect.offset = offset || 0;
		onChange(cloneEffect);
	};

	const onChangeDirection = (direction: number) => {
		const cloneEffect = cloneDeep(effect.current);
		cloneEffect.direction = direction || 0;
		onChange(cloneEffect);
	};

	return (
		<div className={styles['inspector-attributes-container']}>
			<SliderController value={effect.current.offset} label={'偏移'} onChange={onChangeOffset} />
			<SliderController value={effect.current.direction} label={'方向'} onChange={onChangeDirection} min={-180} max={180} />
		</div>
	);
};

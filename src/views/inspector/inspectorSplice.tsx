import { FC, useEffect, useRef, useState } from 'react';
import { EffectNamespace } from '../../type/effect';
import styles from './inspector.module.less';
import { cloneDeep } from 'lodash';
import { SliderController } from '../../components/slider/slider';

interface InspectorSpliceInterface {
	effect: EffectNamespace.SpliceEffectInterface;
	onChange: (effect: EffectNamespace.SpliceEffectInterface) => void;
}

export const InspectorSplice: FC<InspectorSpliceInterface> = (props) => {
	const { onChange } = props;

  const effect = useRef<EffectNamespace.SpliceEffectInterface>(props.effect);

  useEffect(() => {
    effect.current = props.effect;
  }, [props.effect]);

	const onChangeStroke = (stroke: number) => {
		const cloneEffect = cloneDeep(effect.current);
		cloneEffect.stroke = stroke || 0;
		onChange(cloneEffect);
	};

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
			<SliderController value={effect.current.stroke} label={'粗细'} onChange={onChangeStroke} />
			<SliderController value={effect.current.offset} label={'偏移'} onChange={onChangeOffset} />
			<SliderController value={effect.current.direction} label={'方向'} onChange={onChangeDirection} min={-180} max={180} />
		</div>
	);
};

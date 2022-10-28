import { Slider } from '@mantine/core';
import { cloneDeep } from 'lodash';
import { FC } from 'react';
import { SliderController } from '../../components/slider/slider';
import { EffectNamespace } from '../../type/effect';

interface InspectorEmptyInterface {
	effect: EffectNamespace.EmptyEffectInterface;
	onChange: (effect: EffectNamespace.EmptyEffectInterface) => void;
}

export const InspectorEmpty: FC<InspectorEmptyInterface> = (props) => {
	const { effect, onChange } = props;

	const onChangeStroke = (strangth: number) => {
		const cloneEffect = cloneDeep(effect);
		cloneEffect.stroke = strangth;
		onChange(cloneEffect);
	};

	return <SliderController value={effect.stroke} label={'粗细'} onChange={onChangeStroke} />;
};

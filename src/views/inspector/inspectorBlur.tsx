import { FC } from 'react';
import { EffectNamespace } from '../../type/effect';
import { cloneDeep } from 'lodash';
import { SliderController } from '../../components/slider/slider';

interface InspectorBlurInterface {
	effect: EffectNamespace.BlurEffectInterface;
	onChange: (effect: EffectNamespace.BlurEffectInterface) => void;
}

export const InspectorBlur: FC<InspectorBlurInterface> = (props) => {
	const { effect, onChange } = props;

	const onChangeStrangth = (strangth: number) => {
		const cloneEffect = cloneDeep(effect);
		cloneEffect.strangth = strangth || 0;
		onChange(cloneEffect);
	};

	return <SliderController value={effect.strangth} label={'强度'} onChange={onChangeStrangth} />;
};

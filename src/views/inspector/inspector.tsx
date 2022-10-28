import { useDispatch, useSelector } from 'react-redux';
import { changeEffect } from '../../store/edit/edit';
import { getFontConfig } from '../../store/edit/selector';
import { EffectNamespace } from '../../type/effect';
import { InspectorBlur } from './inspectorBlur';
import { InspectorEmpty } from './inspectorEmpty';
import { InspectorGlitch } from './inspectorGlitch';
import { InspectorNeon } from './inspectorNeon';
import { InspectorSplice } from './inspectorSplice';

export const Inspector = () => {
	const effect = useSelector(getFontConfig).effect;
	const dispatch = useDispatch();

	const onChangeEffect = (effect: EffectNamespace.EffectInterface) => {
		dispatch(changeEffect(effect));
	};

	if (effect.type === EffectNamespace.EffectType.NEON) {
		return <InspectorNeon effect={effect as EffectNamespace.NeonEffectInterface} onChange={onChangeEffect} />;
	} else if (effect.type === EffectNamespace.EffectType.EMPTY) {
		return <InspectorEmpty effect={effect as EffectNamespace.EmptyEffectInterface} onChange={onChangeEffect} />;
	} else if (effect.type === EffectNamespace.EffectType.SPLICE) {
		return <InspectorSplice effect={effect as EffectNamespace.SpliceEffectInterface} onChange={onChangeEffect} />;
	} else if (effect.type === EffectNamespace.EffectType.BLUR) {
		return <InspectorBlur effect={effect as EffectNamespace.BlurEffectInterface} onChange={onChangeEffect} />;
	} else if (effect.type === EffectNamespace.EffectType.GLITCH) {
		return <InspectorGlitch effect={effect as EffectNamespace.GlitchEffectInterface} onChange={onChangeEffect} />;
	}

	return null;
};

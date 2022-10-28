import { NumberInput, Slider } from '@mantine/core';
import styles from './slider.module.less';
import { FC } from 'react';

interface SliderInterface {
	label: string;
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
}

export const SliderController: FC<SliderInterface> = (props) => {
	const { label, value, min, max, onChange } = props;
	return (
		<div className={styles['slider-container']}>
			<div className={styles['slider-title']}>
				<span>{label}</span>
				<NumberInput value={value} hideControls onChange={onChange} min={min || 1} max={max || 100} />
			</div>
			<Slider value={value} min={min} max={max} onChange={onChange} />
		</div>
	);
};

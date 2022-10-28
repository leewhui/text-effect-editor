import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getFontConfig, getFontEffectType } from '../../store/edit/selector';
import { EffectNamespace } from '../../type/effect';
import styles from './sider.module.less';

interface SiderButtonInterface {
	value: EffectNamespace.EffectType;
	children: React.ReactNode;
	onChange: (value: EffectNamespace.EffectType) => void;
	label: string;
}

export const SiderButton: FC<SiderButtonInterface> = (props) => {
	const { value, onChange, children, label } = props;
	const effectType = useSelector(getFontEffectType);

	return (
		<div className={styles['sider-button-container']}>
			<div
				className={styles['sider-button']}
				onMouseDown={() => onChange(value)}
				style={{ border: effectType === value ? '2px solid #339af0' : '1px solid #ccc' }}
			>
				{children}
			</div>
			<span className={styles['sider-button-label']}>{label}</span>
		</div>
	);
};

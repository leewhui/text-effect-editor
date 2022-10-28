import { useSelector } from 'react-redux';
import { useEffectStyle } from '../../hooks/createStyle';
import { getFontConfig } from '../../store/edit/selector';
import styles from './workspace.module.less';

export const Workspace = () => {
	const fontConfig = useSelector(getFontConfig);
	const { containerStyle, fontStyle } = useEffectStyle(fontConfig.effect, fontConfig.color);

	return (
		<div className={styles['workspace-container']}>
			<div className={styles['font-content']} style={containerStyle}>
				<p style={{ fontSize: 75, color: fontConfig.color, ...fontStyle }}>{fontConfig.content}</p>
			</div>
		</div>
	);
};

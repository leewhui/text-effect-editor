import { Sider } from "./views/sider/sider";
import { Workspace } from "./views/workspace/workspace";
import styles from './app.module.less';

export const App = () => {
	return (
		<div className={styles['container']}>
			<Sider />
			<Workspace />
		</div>
	);
};

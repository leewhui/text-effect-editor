import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<MantineProvider withGlobalStyles withNormalizeCSS>
		<Provider store={store}>
			<App />
		</Provider>
	</MantineProvider>
);

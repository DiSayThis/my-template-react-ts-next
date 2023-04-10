import { store } from '@/redux/store';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<ReduxProvider store={store}>
			<Head>
				<title>Шаблон</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</ReduxProvider>
	);
}

import * as React from 'react';
import Layout from '../Layout';

const WithLayout = <T extends Record<string, unknown>>(Component: React.FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};

export default WithLayout;

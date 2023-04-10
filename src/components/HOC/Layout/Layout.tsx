import * as React from 'react';
import { ILayoutProps } from './ILayoutProps';
import Header from '@/components/UI/Header/Header';
import Sidebar from '@/components/UI/Sidebar/Sidebar';
import Footer from '@/components/UI/Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children, ...props }: ILayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;

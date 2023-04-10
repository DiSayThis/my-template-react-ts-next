import * as React from 'react';
import { ISidebarProps } from './ISidebarProps';
import styles from './Sidebar.module.scss';

const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
	return (
		<div {...props} className={`${styles.sidebar}`}>
			SideBar
		</div>
	);
};

export default Sidebar;

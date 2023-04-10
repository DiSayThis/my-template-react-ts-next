import * as React from 'react';
import { IHeaderProps } from './IHeaderProps';
import styles from './Header.module.scss';

const Header = ({ ...props }: IHeaderProps): JSX.Element => {
	return (
		<div {...props} className={`${styles.header}`}>
			Header
		</div>
	);
};

export default Header;

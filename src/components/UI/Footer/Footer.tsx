import * as React from 'react';
import { IFooterProps } from './IFooterProps';
import styles from './Footer.module.scss';

const Footer = ({ ...props }: IFooterProps): JSX.Element => {
	return (
		<div {...props} className={`${styles.footer}`}>
			Footer
		</div>
	);
};

export default Footer;

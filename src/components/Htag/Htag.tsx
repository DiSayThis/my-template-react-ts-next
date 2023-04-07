import * as React from 'react';
import { IHtagProps } from './IHtagProps';
import styles from './Htag.module.scss';

const Htag = (props: IHtagProps): JSX.Element => {
	const { tag, children } = props;
	switch (tag) {
		case 'h1':
			return <h1 className={`${styles.htag}`}>{children} </h1>;
		case 'h2':
			return <h2 className={`${styles.htag}`}>{children} </h2>;
		case 'h3':
			return <h3 className={`${styles.htag}`}>{children} </h3>;
		default:
			return <></>;
	}
};

export default Htag;

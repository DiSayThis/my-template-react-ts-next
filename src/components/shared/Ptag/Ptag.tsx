import * as React from 'react';
import { IPtagProps } from './IPtagProps';
import styles from './Ptag.module.scss';
import cn from 'classnames';

const Ptag = ({ size, children, className, ...props }: IPtagProps): JSX.Element => {
	return (
		<p
			className={cn(`${styles.ptag}`, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};

export default Ptag;

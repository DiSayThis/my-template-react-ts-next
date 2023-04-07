import * as React from 'react';
import { IButtonProps } from './IButtonProps';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button = ({ appearance, children, className, ...props }: IButtonProps): JSX.Element => {
	return (
		<button
			className={cn(`${styles.button}`, className, {
				[styles.primary]: appearance === 'primary',
				[styles.secondary]: appearance === 'secondary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

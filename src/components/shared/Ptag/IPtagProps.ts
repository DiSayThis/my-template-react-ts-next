import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IPtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: 's' | 'm' | 'l';
	children: ReactNode;
}

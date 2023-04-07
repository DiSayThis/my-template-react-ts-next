import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import NextSvg from '../../public/next.svg';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h1">Привет мир</Htag>
			<Button appearance="primary">Кнопка 1 </Button>
			<Button appearance="secondary">Кнопка 2</Button>
			<Button appearance="ghost">Кнопка 3</Button>
			<NextSvg />
		</div>
	);
}

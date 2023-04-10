import Button from '@/components/shared/Button';
import Htag from '@/components/shared/Htag';
import NextSvg from '../../public/next.svg';
import Ptag from '@/components/shared/Ptag';
import WithLayout from '@/components/HOC/Layout/WithLayout';

function Home(): JSX.Element {
	return (
		<>
			<Htag tag="h1">Привет мир</Htag>
			<Button appearance="primary">Кнопка 1 </Button>
			<Button appearance="secondary">Кнопка 2</Button>
			<Button appearance="ghost">Кнопка 3</Button>
			<Ptag size="s">Привет мир</Ptag>
			<Ptag>Привет мир</Ptag>
			<Ptag size="l">Привет мир</Ptag>
			<NextSvg />
		</>
	);
}

export default WithLayout(Home);

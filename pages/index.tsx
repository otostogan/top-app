import { Button, Htag } from "../components";

export default function Home():JSX.Element{
	return (
		<>
			<Htag tag="h1">
				Some text
			</Htag>
			<Button appearance="ghost" arrow="down">
				Some text
			</Button>
		</>
	);
}

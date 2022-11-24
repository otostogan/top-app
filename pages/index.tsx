import { Button, Htag, P} from "../components";

export default function Home():JSX.Element{
	return (
		<>
			<Htag tag="h1">
				Title
			</Htag>
			<Button appearance="ghost" arrow="right">
				Some text
			</Button>
			<P size="l">
				Some text	
			</P>
			<P size="s">
				Some text	
			</P>
			<P>
				Some text	
			</P>
		</>
	);
}

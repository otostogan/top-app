import { Button, Htag, P, Tag} from "../components";

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
			<Tag size="s">
				Ghost
			</Tag>
			<Tag size="m" color="red">
				red
			</Tag>
			<Tag size="s" color='green'>
				green
			</Tag>
			<Tag size="m" color='primary'>
				primary
			</Tag>
			<Tag size="m" color='primary' href="/">
				primary
			</Tag>
		</>
	);
}

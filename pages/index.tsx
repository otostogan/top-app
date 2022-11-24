import { useState } from "react";
import { Button, Htag, P, Tag, Rating} from "../components";

export default function Home():JSX.Element{

	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">
				Title
			</Htag>
			<Button appearance="ghost" arrow="right">
				Some text
			</Button>
			<Button appearance='primary' arrow='down'>
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
			<Tag size="m" color='primary'>
				RED M size
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
			<Rating isEditable={true} rating={rating} setRating={setRating}/>
		</>
	);
}

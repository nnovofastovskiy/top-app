import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Tag } from '../components';
/*
import { Button } from '../components/Button/Button';
import { Ptag } from '../components/Ptag/Ptag';*/

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);
	useEffect(() => {
		console.log('Counter = ' + counter);
		return function cleanup() {
			console.log('Unmount');
		};
	});

	return (
		<>
			<Htag tag="h1">{counter}</Htag>
			<Button appearance="primary" onClick={() => setCounter(x => x + 1)}>set</Button>
			<Button appearance="ghost" arrow='right'>bdrhaesrhtn</Button>
			<Ptag size='s'>paragraph sizeS</Ptag>
			<Ptag>paragraph sizeM</Ptag>
			<Ptag size='l'>paragraph sizeL</Ptag>
			<Tag size='m' color='green'>Tag</Tag>
		</>
	);
}

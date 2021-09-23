import React, { useEffect, useState } from 'react';
import { Button, Htag } from '../components';
import { withLayout } from '../layout/Layout';
/*
import { Button } from '../components/Button/Button';
import { Ptag } from '../components/Ptag/Ptag';*/

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	const [counter, setCounter] = useState<number>(0);
	useEffect(() => {
		console.log('Counter = ' + counter);
		return function cleanup() {
			console.log('Unmount');
		};
	});

	return (
		<>
			Body
			<Button appearance="primary">Button</Button>
			<Htag tag="h2">Htag</Htag>
		</>
	);
}

export default withLayout(Home);

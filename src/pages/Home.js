import React, { useState } from 'react';
import { getNextLaunch, getLatestLaunch, getAllUpcomingLaunches, getAllPastLaunches } from '../services/api';
import Header from '../components/Header';
import Button from '../components/Button';
import Body from '../components/Body';

function Home() {
  const [data, setData] = useState();

	const nextLaunch = async () => {
			const response = await getNextLaunch();
			setData(response);
	}

	const latestLaunch = async () => {
			const response = await getLatestLaunch();
			setData(response);
	}

	const allUpComingLaunches = async () => {
			const response = await getAllUpcomingLaunches();
			setData(response);
	}

	const allPastLaunches = async () => {
			const response = await getAllPastLaunches();
			setData(response);
	}

	return (
		<div className="container-home-page">
			<Header />
			<div>
				<Button dataTestId="next" name='Próximo Lançamento' func={ nextLaunch } />
				<Button dataTestId="latest" name='Último Lançamento' func={ latestLaunch } />
				<Button dataTestId="upcoming" name='Próximos Lançamentos' func={ allUpComingLaunches } />
				<Button dataTestId="past" name='Lançamentos Passados' func={ allPastLaunches } />
			</div>
			<Body data={ data } />
		</div>
	);
}

export default Home;
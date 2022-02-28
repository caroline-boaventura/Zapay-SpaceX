import React, { useState } from 'react';
import { getNextLaunch, getLatestLaunch, getAllUpcomingLaunches, getAllPastLaunches } from '../services/api';
import Header from '../components/Header';
import Button from '../components/Button';
import Body from '../components/Body';

function Home() {
    const [data, setData] = useState({});

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
      <div>
        <Header />
        <Button name='Próximo Lançamento' func={ nextLaunch } />
        <Button name='Último Lançamento' func={ latestLaunch } />
        <Button name='Próximos Lançamentos' func={ allUpComingLaunches } />
        <Button name='Lançamentos passados' func={ allPastLaunches } />
        <Body data={ data } />
      </div>
    );
  }
  
  export default Home;
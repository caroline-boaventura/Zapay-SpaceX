import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spacexdata.com',
})

export const getNextLaunch = () => {
    const nextLaunch = api.get('/v4/launches/next')
        .then((response) => response.data)
        .catch((error) => console.log(error.response));
    
    return nextLaunch;
};

export const getLatestLaunch = () => {
    const latestLaunch = api.get('/v4/launches/latest')
        .then((response) => response.data)
        .catch((error) => console.log(error.response));

    return latestLaunch; 
}

export const getAllUpcomingLaunches = () => {
    const allUpcomingLaunches = api.get('v4/launches/upcoming')
        .then((response) => response.data)
        .catch((error) => console.log(error.response));
    
    return allUpcomingLaunches;
}

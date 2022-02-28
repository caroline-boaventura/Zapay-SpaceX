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

export const getLatestLaunch = async () => {
    const latestLaunch = await api.get('/v4/launches/latest')
        .then((response) => response.data)
        .catch((error) => console.log(error.response))

    return latestLaunch; 
}


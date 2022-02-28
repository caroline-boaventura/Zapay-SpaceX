import axios from 'axios';

export const getNextLaunch = () => {
    const nextLaunch = axios.get('https://api.spacexdata.com/v4/launches/next')
        .then((response) => response.data)
        .catch((error) => console.log(error.response));
    
    return nextLaunch;
}
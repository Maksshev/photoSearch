import axios from 'axios'

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`
    }
});


export {unsplash}
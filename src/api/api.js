import axios from 'axios';

export const api_key = '2b9eee4329c72d045281e46364f68420'

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})
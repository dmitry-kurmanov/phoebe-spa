import Axios from 'axios';

export function api(baseUrl:string, getAuthorizationHeader) {
    const axios = Axios.create({
        baseURL : baseUrl
    });
    axios.interceptors.request.use((config) => {
        config.headers = {
            Authorization : getAuthorizationHeader()
        };
        return config;
    });
    const api = {
        getRandomCat() {
            return axios.get('/cat-api/').then(({ data }) => data.url);
        },
        getFile(url) {
            return axios.get(url).then(({data}) => data);
        }
    };
    return api;
}
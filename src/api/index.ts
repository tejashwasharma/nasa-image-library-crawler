import axios from 'axios';

interface Params {
    method: string;
    url: string;
    rootUrl?: string;
    data?: object;
    params?: object;
}

export const api = ({ method, url, rootUrl, data, params }: Params) => {
    rootUrl = rootUrl || 'https://images-api.nasa.gov/';
    return axios({
        method: method, url: `${rootUrl}${url}`, data, params
    })
}

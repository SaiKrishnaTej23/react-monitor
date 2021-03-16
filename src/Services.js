import axios from 'axios';

export const getData = () => {
    return axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
}
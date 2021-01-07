import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios;

import axios from 'axios';
import { envvars } from '../config';

async function getIdols({ cursor, keyword = '' }) {
    const [serverUrl, teamName] = envvars;

    const res = await axios.get(`${serverUrl}/${teamName}/idols`, {
        params: { cursor, keyword },
    });
    const idols = res.data;

    return idols;
}

export default getIdols;

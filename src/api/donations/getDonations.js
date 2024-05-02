import axios from 'axios';
import { envvars } from '../config';

async function getDonations({ cursor }) {
    const [serverUrl, teamName] = envvars;

    const res = await axios.get(`${serverUrl}/${teamName}/donations`, {
        params: { cursor },
    });

    const donations = res.data;

    return donations;
}

export default getDonations;

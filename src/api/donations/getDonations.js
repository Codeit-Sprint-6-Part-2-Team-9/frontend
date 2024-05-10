import axios from 'axios';
import { ENV } from '../config';

async function getDonations({ cursor }) {
    const [serverUrl, teamName] = ENV;

    const res = await axios.get(`${serverUrl}/${teamName}/donations`, {
        params: { cursor },
    });

    const donations = res.data;

    return donations;
}

export default getDonations;

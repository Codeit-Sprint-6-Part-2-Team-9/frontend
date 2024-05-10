import axios from 'axios';
import { ENV } from '../config';

async function putContribute(donationId, creditsToDonate) {
    const { serverUrl, teamName } = ENV;

    const res = await axios.post(
        `${serverUrl}/${teamName}/donations/${donationId}/contribute`, {
            amount: creditsToDonate,
        }
    );

    const donation = res.data;

    return donation;
}

export default putContribute;

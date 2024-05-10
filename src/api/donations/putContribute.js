import { default as axios } from '../axios';
import { ENV } from '../config';

async function putContribute(donationId, creditsToDonate) {
    const { serverUrl, teamName } = ENV;

    const res = await axios.post(
        `$/${teamName}/donations/${donationId}/contribute`, {
            amount: creditsToDonate,
        }
    );

    const donation = res.data;

    return donation;
}

export default putContribute;

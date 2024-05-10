import axios from 'axios';
import { ENV } from '../config';

async function postContribute({ idolId, creditsToDonate }) {
    const [serverUrl, teamName] = ENV;

    const res = await axios.post(
        `${serverUrl}/${teamName}/donations/${idolId}/contribute`,
        {
            params: { amount: creditsToDonate },
        }
    );

    const donation = res.data;

    return donation;
}

export default postContribute;

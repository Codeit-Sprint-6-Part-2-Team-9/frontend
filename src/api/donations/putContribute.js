import axios from '../axios';

const putContribute = (donationId, creditsToDonate) => axios.put(
        `/donations/${donationId}/contribute`, {
            amount: creditsToDonate,
        }
    ).then(res => res.data);

export default putContribute;

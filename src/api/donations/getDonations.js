import axios from '../axios';

async function getDonations({ cursor, nextDataLength }) {

    const res = await axios.get('/donations', {
        params: {
            cursor,
            pageSize: nextDataLength
        },
    });

    const donations = res.data;

    return donations;
}

export default getDonations;

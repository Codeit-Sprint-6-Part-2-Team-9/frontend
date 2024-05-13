import axios from '../axios';

async function getIdols({ cursor, nextDataLength, keyword = '' }) {
    const res = await axios.get('/idols', {
        params: {
            cursor,
            keyword,
            pageSize: nextDataLength
        },
    });
 
    const idols = res.data;

    return idols;
}

export default getIdols;

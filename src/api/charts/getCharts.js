import axios from '../axios';

async function getCharts({ gender, nextDataSize, cursor }) {
    const res = await axios.get('/charts/{gender}', {
        params: {
            gender,
            cursor,
            pageSize: nextDataSize,
        },
    });

    const charts = res.data;

    return charts;
}

export default getCharts;

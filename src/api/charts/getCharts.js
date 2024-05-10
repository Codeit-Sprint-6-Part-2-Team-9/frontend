import { default as axios } from '../axios';
import { ENV } from '../config';

async function getCharts({ gender, cursor }) {
    const { teamName, pageSize } = ENV;

    const res = await axios.get(`/${teamName}/charts/{gender}`, {
        params: { gender, cursor, pageSize },
    });

    const charts = res.data;

    return charts;
}

export default getCharts;

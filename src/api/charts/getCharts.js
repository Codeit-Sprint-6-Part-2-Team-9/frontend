import axios from 'axios';
import { ENV } from '../config';

async function getCharts({ gender, cursor }) {
    const { serverUrl, teamName, pageSize } = ENV;

    const res = await axios.get(`${serverUrl}/${teamName}/charts/{gender}`, {
        params: { gender, cursor, pageSize },
    });

    const charts = res.data;

    return charts;
}

export default getCharts;

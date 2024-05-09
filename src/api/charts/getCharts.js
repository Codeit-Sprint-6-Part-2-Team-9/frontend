import axios from 'axios';
import { envvars } from '../config';

async function getCharts({ gender, cursor }) {
    const { serverUrl, teamName, pageSize } = envvars;

    const res = await axios.get(`${serverUrl}/${teamName}/charts/{gender}`, {
        params: { gender, cursor, pageSize },
    });

    const charts = res.data;

    return charts;
}

export default getCharts;

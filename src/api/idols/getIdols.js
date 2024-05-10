import { default as axios } from '../axios';
import { ENV } from '../config';

async function getIdols({ cursor, keyword = '' }) {
    const { serverUrl, pageSize, teamName } = ENV;

    const res = await axios.get(`/${teamName}/idols`, {
        // 임시 페이지 사이즈
        params: { cursor, keyword, pageSize: 9999 },
    });
    const idols = res.data;

    return idols;
}

export default getIdols;

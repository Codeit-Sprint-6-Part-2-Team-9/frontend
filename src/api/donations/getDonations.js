import { default as axios } from '../axios';
import { ENV } from '../config';

async function getDonations({ cursor }) {
    const { pageSize, teamName } = ENV;

    const res = await axios.get(`/${teamName}/donations`, {
        //임시 페이지 사이즈
        params: { cursor, pageSize: 9999 },
    });

    const donations = res.data;

    return donations;
}

export default getDonations;

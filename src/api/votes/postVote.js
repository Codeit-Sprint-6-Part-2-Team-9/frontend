import { default as axios } from '../axios';
import { ENV } from '../config';

async function postVote(idolId) {
    const { serverUrl, teamName } = ENV;
    const res = await axios.post(
        `$/${teamName}/votes`, {
            idolId,
        });

    const vote = res.data;
    console.log(res.error);
    return vote;
}

export default postVote;
import { default as axios } from '../axios';

async function postVote(idolId) {
    const res = await axios.post(
        '/votes', {
            idolId,
        });

    const vote = res.data;
    return vote;
}

export default postVote;
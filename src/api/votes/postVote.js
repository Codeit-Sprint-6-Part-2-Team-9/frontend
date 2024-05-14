import axios from '../axios';

const postVote = (idolId) => axios.post(
        '/votes', {
            idolId,
        }
    ).then(res => res.data)

export default postVote;
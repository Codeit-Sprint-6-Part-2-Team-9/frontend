import axios from '../axios';

const getDonations = ({ cursor }, pageSizeCallback) => axios.get('/donations', {
        params: {
            cursor,
            pageSize: pageSizeCallback(),
        },
    }
).then(res => res.data);

export default getDonations;

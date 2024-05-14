import axios from '../axios';

const getCharts = ({ gender, cursor }, pageSizeCallback) => axios.get('/charts/{gender}', {
        params: {
            gender,
            cursor,
            pageSize: pageSizeCallback()
        },
    }
).then(res => res.data);

export default getCharts;

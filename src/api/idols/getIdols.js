import axios from '../axios';
const getIdols = ({ cursor }, pageSizeCallback = () => 9999) =>
  axios
    .get('/idols', {
      params: {
        cursor,
        pageSize: pageSizeCallback(),
      },
    })
    .then((res) => res.data);

export default getIdols;

import axios from '../axios';
// import { ENV } from '../config';

async function getDonations({ cursor }) {
  // const { pageSize } = ENV;

  const res = await axios.get('/donations', {
    //임시 페이지 사이즈
    params: { cursor, pageSize: 5 },
  });

  const donations = res.data;

  return donations;
}

export default getDonations;

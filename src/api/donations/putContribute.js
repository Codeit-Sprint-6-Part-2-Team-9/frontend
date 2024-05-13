import axios from '../axios';

async function putContribute(donationId, creditsToDonate) {
  const res = await axios.put(`/donations/${donationId}/contribute`, {
    amount: creditsToDonate,
  });

  const donation = res.data;

  return donation;
}

export default putContribute;

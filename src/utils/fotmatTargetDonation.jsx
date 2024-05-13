function fotmatTargetDonation(number) {
  if (number < 10000) {
    return String(number);
  } else if (number < 1000000) {
    return Math.floor(number / 10000) + '만';
  } else if (number < 10000000) {
    return Math.floor(number / 1000000) + '백만';
  } else {
    return Math.floor(number / 10000000) + '천만';
  }
}

export default fotmatTargetDonation;

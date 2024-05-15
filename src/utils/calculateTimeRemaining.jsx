const calculateTimeRemaining = (deadline) => {
  const now = new Date();
  const end = new Date(deadline);
  const differenceMs = end - now;

  if (differenceMs <= 0) {
    return '후원 마감';
  }

  const daysRemaining = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(
    (differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutesRemaining = Math.floor(
    (differenceMs % (1000 * 60 * 60)) / (1000 * 60),
  );
  const secondsRemaining = Math.floor((differenceMs % (1000 * 60)) / 1000);

  if (daysRemaining > 0) {
    return `${daysRemaining}일 남음`;
  }
  if (hoursRemaining > 0) {
    return `${hoursRemaining}시간 남음`;
  }
  if (minutesRemaining > 0) {
    return `${minutesRemaining}분 남음`;
  }
  return `${secondsRemaining}초 남음`;
};

export default calculateTimeRemaining;

const calculateTimeRemaining = (deadline) => {
  const differenceMs = new Date(deadline) - new Date();
  const daysRemaining = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor(
    (differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  if (daysRemaining > 0) {
    return `${daysRemaining}일 남음`;
  }
  if (hoursRemaining > 0) {
    return `${hoursRemaining}시간 남음`;
  }
  return "후원 마감";
};

export default calculateTimeRemaining;

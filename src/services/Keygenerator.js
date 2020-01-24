// generate unique key for array mapping
const getRandomKey = () =>
  Math.random()
    .toString(36)
    .substring(7);

export default { getRandomKey };

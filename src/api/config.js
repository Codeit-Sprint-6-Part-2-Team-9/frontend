const CLIENT_STATE_KEYS = {
  credits: 'credits',
  favoriteIdols: 'favoriteIdols',
};

const ENV = {
  serverUrl: 'https://fandom-k-api.vercel.app',
  teamName: '6-9',
  defaultPageSize: 10,
};

const QUERY_KEYS = {
  femaleChart: ['female'],
  maleChart: ['male'],
  femaleMonthChart: ['female', 'month'],
  maleMonthChart: ['male', 'month'],
  donations: ['donations'],
  idols: ['idols'],
};

export { CLIENT_STATE_KEYS, ENV, QUERY_KEYS };

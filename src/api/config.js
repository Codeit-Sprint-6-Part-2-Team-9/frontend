const CLIENT_STATE_KEYS = {
  credits: 'credits',
  favoriteIdols: 'favoriteIdols',
};

const ENV = {
  serverUrl: import.meta.env.VITE_SERVER_URL,
  teamName: import.meta.env.VITE_TEAM_NAME,
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

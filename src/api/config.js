const CLIENT_STATE_KEYS = {
  credits: 'credits',
  favoriteIdols: 'favoriteIdols',
};

const ENV = {
  serverUrl: import.meta.env.VITE_SERVER_URL,
  teamName: import.meta.env.VITE_TEAM_NAME,
  pageSize: 10,
};

const SERVER_STATE_KEYS = {
  femaleChart: 'female',
  maleChart: 'male',
  donation: 'donation',
  idol: 'idol',
};

export { CLIENT_STATE_KEYS, ENV, SERVER_STATE_KEYS };

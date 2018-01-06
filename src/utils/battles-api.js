import axios from 'axios';

const BASE_URL = 'http://localhost:3333';
// const BASE_URL = 'https://us-central1-vue-con-auth.cloudfunctions.net/app';

function getPublicStartupBattles() {
  const url = `${BASE_URL}/api/battles/public`;
  return axios.get(url).then(response => response.data);
}

function getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/battles/private`;
  // return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data);
  return axios.get(url).then(response => response.data);
}

export { getPublicStartupBattles, getPrivateStartupBattles };

import axios from 'axios';

// const BASE_URL = 'http://localhost:3333';
let BASE_URL = 'http://localhost:5000/vue-con-auth/us-central1/app';
// const BASE_URL = 'https://us-central1-vue-con-auth.cloudfunctions.net/app';
if (process.env.NODE_ENV === 'production') {
  BASE_URL = process.env.BASE_URL_API;
}

function getPublicStartupBattles() {
  const url = `${BASE_URL}/api/battles/public`;
  return axios.get(url).then(response => response.data);
}

function getPrivateStartupBattles() {
  const url = `${BASE_URL}/api/battles/private`;
  return axios.get(url, { headers: { Authorization: `Bearer ${localStorage.token}` } }).then(response => response.data);
}

export { getPublicStartupBattles, getPrivateStartupBattles };

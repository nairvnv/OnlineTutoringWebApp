import { callApi } from './callApi';
import sha1 from 'sha1';

// export const getLocalIP = async () => {
//   // return await callApi({ endpoint: `https://geolocation-db.com/json/`, fullUrl: true }).then((res) => {
//   //   console.log('ipdata', res)
//   // })
//   fetch('https://geolocation-db.com/json/').then(response => response.json())
//     .then(data => console.log(data));
// }

export const UserSignupAPI = async ({ username, email, passHash }) => {
  return await callApi({ endpoint: 'user', method: 'post', body: { name: String(username), passHash: String(sha1(passHash)), email: String(email) } })
}


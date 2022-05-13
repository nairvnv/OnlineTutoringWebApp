import { callApi } from './callApi';
import sha1 from 'sha1';
import ObjectsToArray from '../utils/objToArray';

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

export const TutorSignup = async ({ username, email, subject, passHash, aboutMe, startTime, endTime }) => {
  // console.log(startTime, endTime)
  var s = startTime.split(':')[0] + '-' + endTime.split(':')[0] 
  return await callApi({ endpoint: 'tutor', method: 'post', body: { name: String(username), passHash: String(sha1(passHash)), email: String(email), course: subject, aboutMe, dailyTimeSlot: s} })
}

export const UserSignIn = async ({ email, passHash }) => {
  return await callApi({ endpoint: 'user/login', method: 'post', body: { email: String(email), passHash: String(sha1(passHash)) } })
}
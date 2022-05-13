import { callApi } from './callApi';
import sha1 from 'sha1';
import ObjectsToArray from '../utils/objToArray';

export const UserSignupAPI = async ({ username, email, passHash }) => {
  return await callApi({ endpoint: 'user', method: 'post', body: { name: String(username), passHash: String(sha1(passHash)), email: String(email) } })
}

export const TutorSignup = async ({ username, email, subject, passHash, aboutMe, startTime, endTime }) => {
  var s = startTime.split(':')[0] + '-' + endTime.split(':')[0]
  return await callApi({ endpoint: 'tutor', method: 'post', body: { name: String(username), passHash: String(sha1(passHash)), email: String(email), course: subject, aboutMe, dailyTimeSlot: s } })
}

export const UserSignIn = async ({ email, passHash }) => {
  return await callApi({ endpoint: 'user/login', method: 'post', body: { email: String(email), passHash: String(sha1(passHash)) } })
}

export const TutorLogin = async ({ email, passHash }) => {
  return await callApi({ endpoint: 'tutor/login', method: 'post', body: { email: String(email), passHash: String(sha1(passHash)) } })
}

export const GetTutorAppointments = async ({ id }) => {
  return await callApi({ endpoint: 'tutor/appointments', method: 'post', body: { id } })
}
export const GetStudentAppointments = async ({ id }) => {
  return await callApi({ endpoint: 'user/appointments', method: 'post', body: { id } })
}


export const GetStudentFavourites = async ({ id }) => {
  return await callApi({ endpoint: 'user/favorites', method: 'post', body: { id } })
}

export const AppendFavorites = async ({ id, favorites }) => {
  return await callApi({ endpoint: 'user/favorites', method: 'post', body: { id, favorites } })
}


export const DeleteFavorite = async ({ id, favorite }) => {
  return await callApi({ endpoint: 'user/favorites', method: 'post', body: { id, favorite } })
}

export const GetAllTutors = async () => {
  return await callApi({ endpoint: 'tutor', method: 'get' })
}
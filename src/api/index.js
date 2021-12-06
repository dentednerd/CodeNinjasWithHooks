import axios from "axios";

const api = axios.create({
  baseURL: 'https://codeninjas-api.herokuapp.com/api',
});

export const getQuestions = async (level) => {
  const url = `/levels/${level}/questions`;
  const { data } = await api.get(url);
  return data;
}

export const getUserByUsername = async(username) => {
  const url = `/users/${username}`;
  const { data: { user } } = await api.get(url);
  return user;
}

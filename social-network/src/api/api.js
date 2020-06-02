import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

//create instance axios
const instance = axios.create({
  //this means that we are logged in
  withCredentials: true,
  headers: {
    'API-KEY': '32f728f4-5522-41fd-a01e-5b6564edf694',
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  //page - number of portions items; count - page size (how many items well be returned in response)
  return instance
    .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

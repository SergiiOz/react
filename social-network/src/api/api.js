import * as axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

//create instance axios
const instanceAxios = axios.create({
  //this means that we are logged in
  withCredentials: true,
  headers: {
    'API-KEY': '32f728f4-5522-41fd-a01e-5b6564edf694',
  },
});

//-- Users --
//create object with methods and this methods return instance axios
export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    //page - number of portions items; count - page size (how many items well be returned in response)
    return instanceAxios
      .get(baseURL + `users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  followUser(userId) {
    return instanceAxios
      .post(baseURL + `follow/${userId}`, {})
      .then((response) => {
        return response.data;
      });
  },

  unFollowUser(userId) {
    return instanceAxios
      .delete(baseURL + `follow/${userId}`)
      .then((response) => {
        return response.data;
      });
  },
};

//-- ProfileContainer ---
export const profileAPI = {
  getUsersToProfile(userId) {
    return instanceAxios.get(baseURL + `profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};

//HeaderContainer

export const authAPI = {
  me() {
    return instanceAxios.get(baseURL + `auth/me`);
  },
};

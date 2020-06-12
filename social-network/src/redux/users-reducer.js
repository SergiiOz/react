import { usersAPI } from './../api/api';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: true,
    //   fullName: 'Michel',
    //   status: "I'm a developer",
    //   photoUrl:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR766YSejBCsUF2jottA5FXFTa_TQFmJN1FQdjuy07TQK293wSo&usqp=CAU',
    //   location: {
    //     country: 'Poland',
    //     city: 'Helm',
    //   },
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   fullName: 'Sergii',
    //   status: "I'm a front-end developer",
    //   photoUrl:
    //     'https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg',
    //   location: {
    //     country: 'Ukraine',
    //     city: 'Rivne',
    //   },
    // },
    // {
  ],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isFetching: false,
  //using for disable button follow/unfollow when fetching data
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users]
        users: state.users.map((user) => {
          //если id юзера совпадает  с id которое пришло в action
          if (user.id === action.userId) {
            //тогда делаем копию юзера,изменяем в нем поле которое нам нужно, и его возвращаем
            return { ...user, followed: true };
          }
          //если не совпадает id, то возвращаем старого юзера
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      //изначально масив буде пустой и его нужно будет заполнить обьектами, которые прийдут с сервера
      //если масив изначально не пустой, то перезатираем массива старый новым который прийдее в 'action'
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      //set curent page in Users
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      //set total users count
      return { ...state, totalUsersCount: action.totalCount };
    case TOGGLE_IS_FETCHING:
      //change toggle isFetching
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      //change toggle followingInProgress
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

// ACTION CREATOR
//followAC it's followActionCreator
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const setTotalUsersCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};

export const setToggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollowInProgressAC = (isFetching, userId) => {
  return {
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId,
  };
};

//redux-thunk thunkCreators
export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setToggleIsFetchingAC(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setToggleIsFetchingAC(false));
      console.log(data);
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    //function change state - button disabled when send request
    dispatch(toggleFollowInProgressAC(true, userId));
    //axios.post carried out to api.js in object usersAPI method followUser
    usersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(userId));
      }
      //function change state - button turned on when come response
      dispatch(toggleFollowInProgressAC(false, userId));
    });
  };
};

export const unFollowThunkCreator = (userId) => {
  return (dispatch) => {
    //function change state - button disabled when send request
    dispatch(toggleFollowInProgressAC(true, userId));
    //axios.delete carried out to api.js in object usersAPI method unfollowUser
    usersAPI.unFollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(userId));
      }
      //function change state - button turned on when come response
      dispatch(toggleFollowInProgressAC(false, userId));
    });
  };
};

export default usersReducer;

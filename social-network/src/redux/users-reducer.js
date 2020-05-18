export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

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
    //   id: 3,
    //   followed: true,
    //   fullName: 'Alex',
    //   status: "I'm a beck-end developer",
    //   photoUrl:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR766YSejBCsUF2jottA5FXFTa_TQFmJN1FQdjuy07TQK293wSo&usqp=CAU',
    //   location: {
    //     country: 'USA',
    //     city: 'California',
    //   },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 2,
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
      //если масив изначально не пустой, то соеденяем два мссива сатрый и новый который прийдее в 'action'
      return { ...state, users: [...state.users, ...action.users] };
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

export default usersReducer;

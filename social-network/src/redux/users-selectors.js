export const getUsersThroughSelector = (state) => {
  return state.usersPage.users;
};

export const getPageSizeThroughSelector = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUserCountTroughSelector = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPageTroughSelector = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetchingTroughSelector = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgressTroughSelector = (state) => {
  return state.usersPage.followingInProgress;
};

// users: state.usersPage.users,
// pageSize: state.usersPage.pageSize,
// totalUsersCount: state.usersPage.totalUsersCount,
// currentPage: state.usersPage.currentPage,
// isFetching: state.usersPage.isFetching,
// followingInProgress: state.usersPage.followingInProgress,

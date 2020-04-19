const initialState = {
  friends: [
    {
      id: 1,
      name: "Johgn",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR766YSejBCsUF2jottA5FXFTa_TQFmJN1FQdjuy07TQK293wSo&usqp=CAU",
    },
    {
      id: 2,
      name: "Marta",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4LRADmE5sIaCA5kC7SaM2WDgzUH_ngB30-rgL6xfIcFdbnsUW&usqp=CAU",
    },
    {
      id: 3,
      name: "Serg",
      photo:
        "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
    },
  ],
};

const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;

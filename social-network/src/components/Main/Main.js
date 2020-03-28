import React from "react";

const Main = () => {
  return (
    <main className="main">
      <div className="main__poster">
        <img
          className="image"
          src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="poster"
        />
      </div>

      {/* Profile */}
      <div className="main__profile">
        <div className="main__avatar">
          Avatar
          <img
            className="image"
            src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
            alt="profile"
          />
        </div>

        <div className="main__description">Description</div>
      </div>

      {/* Post form */}
      <div>
        My post
        <div>New post</div>
        {/* posts */}
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </main>
  );
};

export default Main;

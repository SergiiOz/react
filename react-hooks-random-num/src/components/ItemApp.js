import React from "react";

function ItemApp(props) {
  return (
    <div>
      <h3>Sum Random numbers, every 3 seconds:</h3>
      <div style={{ fontSize: "36px" }}>{props.myCount}</div>
    </div>
  );
}

export default ItemApp;

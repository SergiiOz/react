import React from "react";
import { ClickedContext } from "../../App";

export default props => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        width: "300px",
        margin: "0 auto"
      }}
    >
      <h3>Counter 2</h3>
      {/* if clicked true then to show <p> */}
      {/* we use context */}
      <ClickedContext.Consumer>
        {clickedCouner2 => (clickedCouner2 ? <p>Clicked Counter2</p> : null)}
      </ClickedContext.Consumer>
      {/* {props.clickedC2 ? <p>Clicked Counter2</p> : null} */}
    </div>
  );
};

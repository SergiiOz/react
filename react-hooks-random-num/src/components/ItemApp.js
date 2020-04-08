import React, { useState, useEffect } from "react";
import Flip from "./Flip";

function ItemApp(props) {
  // console.log(props);
  const [sumChild, setSum] = useState(0);
  // console.log(sumChild);

  useEffect(() => {
    const numberFromParents = props.parentCount;
    const total = sumChild + numberFromParents;
    setSum(total);
  }, [props.parentCount]);

  return (
    <div>
      <h3>Sum Random numbers, every 3 seconds:</h3>
      {/* <div style={{ fontSize: "36px" }}>{sumChild}</div> */}
      <Flip sumChild={sumChild} />
    </div>
  );
}

export default ItemApp;

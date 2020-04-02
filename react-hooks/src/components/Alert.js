import React from "react";

// we get
// object props {
//     alert {
//         text: "Test Alert"
//         type: "success"
//     }
// }

const Alert = props => {
  console.log(alert);
  return (
    <div
      className={`alert alert-${props.alert.type ||
        "secondary"} alert-dismissible`}
      role="alert"
    >
      {props.alert.text}
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;

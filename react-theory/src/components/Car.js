import React from 'react';
// props.childern this is 'item'
// <Car > <p>item</p><Car/>

export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        {/*onChangeTitle - we ourselves came up with the name and pass to App   */}
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
);

// version create component
//version 1
// function car() {
//     return (
//         <div>
//             <p>This is car</p>
//         </div>
//     );
// }

//version 2
// const car = () => {
//     return (
//         <div>
//             <p>This is car</p>
//         </div>
//     );
// }

// version 3
// const car = () => (
//     <div>
//         <p>This is car</p>
//         <span>Mustang</span>
//     </div>
// )

// export default car;


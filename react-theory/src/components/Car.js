import React from 'react';
//radium for inline style
import Radium from 'radium';
import './Car.css';

// props.childern this is 'item'
// <Car > <p>item</p><Car/>

const Car = (props) => {
    //create array to input c-car (dynamic class)
    const inputClasses = ['c-car__input'];

    //if input isn't empty - border green or red or bold
    if (props.name !== '') {
        inputClasses.push('c-car__input--green');
    } else {
        inputClasses.push('c-car__input--red');
    }

    if (props.name.length > 4) {
        inputClasses.push('c-car__input--bold')
    }

    const style = {
        border: '2px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
        //work with inline style - with packet Radium
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0 , .25)'
        }
    }


    //this JSX
    return (
        <div className="c-car" style={style}
        // //inline style
        // style={{
        //     padding: '10px',
        //     border: '2px solid #ccc',
        //     marginBottom: '10px',
        //     boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14) ',
        //     borderRadius: '10px',

        // }}
        >
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            {/* change name car */}
            <input type="text" placeholder="change name car"
                onChange={props.onChangeName}
                //default value
                value={props.name}
                //we have to pass array and convert into string and join through ' '
                className={inputClasses.join(' ')}
            />
            <br />

            {/*onChangeTitle - we ourselves came up with the name and pass to App   */}
            <button onClick={props.onChangeTitle}>Click (change title Page to car name)</button>
            <br />

            {/* delete car */}
            <button onClick={props.onDelete}>Delete Car</button>
        </div>
    );
}

//for work with Radium we need wrap the component Car
export default Radium(Car);

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


import React, { Component } from 'react';

// class CalcNumber extends Component {
//     render() {
//         console.log("calc number",this.props.number);
//         return (
//             <div>
//                 <button onClick={()=>this.props.clickNumber(this.props.number)}>{this.props.number}</button>
//             </div>
//         );
//     }
// }

const CalcNumber=({clickNumber,number})=> {
    return (
        <div>
            <input type="button" onClick={()=>clickNumber(number)} value={number} />
        </div>
    );
}


export default CalcNumber; 
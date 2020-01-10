import React, { Component } from 'react';

const CalcOperator=({clickOperator,value})=> {
        return (
            <div>
                <input type="button" onClick={clickOperator} value={value} />
            </div>
        );
}

export default CalcOperator;
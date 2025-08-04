import React, { useState } from 'react'
function CheckBox(){

    const [isCheck, setisCheck] = useState(false);
    const flag = () => {
        setisCheck(!isCheck);
     }

      const line = {
    textDecoration: isCheck ? 'line-through' : 'none',
    color: isCheck ? '#888' : '#000'
    }

      return (
        <div>
        <h1>CheckBox</h1>
        <div>
            <input type="checkbox" checked={isCheck} onChange={flag}/>
            <label style={line}>
            Era uma vez, um texto, que um dia seria riscado...
            </label>
        </div>
        </div>
    );
}

export default CheckBox;
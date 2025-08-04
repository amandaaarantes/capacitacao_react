import { useState } from "react";

function Countdown(){

    const [num, setNum] = useState<number|number>(10);

    const update = () => {
        if(num != 0)
        setNum(num-1);
        else{
        
        }
    }
    return(
        <div>
            <h1>Countdown</h1>
            {num !=0 && (<button onClick={update} style={{
                backgroundColor: '#f97316', 
                    color: 'white',             
                    border: 'none',             
                    borderRadius: '8px',        
                    padding: '10px 20px',       
                    fontSize: '16px',          
                    fontWeight: 'bold',   
            }}>{num}</button>) }
        </div>
    );
}
export default Countdown;
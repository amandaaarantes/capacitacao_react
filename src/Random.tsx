import { useState } from "react";

function Random(){

    const [randomNum, setRandomNum] = useState<number | null>(null);
    const generate = () => {
        const num = Math.floor(Math.random()*101);
        setRandomNum(num);
    }
    
    return (

        <div>
            <h1>Gerador de Números</h1>
            <button onClick={generate} style={{
                  backgroundColor: '#f97316',
                    color: 'white', 
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '16px', 
                    fontWeight: 'bold', 
            }}> Randomize</button>
            <p>{randomNum}</p>

        </div>
    );
    
}

export default Random;
import { useState } from "react";

function ToggleText(){

    const[flag, setFlag] = useState<boolean|boolean>(false);

    const toggle = () => {
        let flagg : boolean = !flag;
        setFlag(flagg);
    }
    function text() : string{
        let t : string;
        if(flag){
            t = "Onde canta o Sabiá";
        }
        else{
            t = "Minha terra tem palmeiras";
        }
        return t;
    }
    return(

        <div>
            <h1>Troque o Texto! </h1>
            <button onClick={toggle} style={{
                    backgroundColor: '#f97316',
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '16px', 
                    fontWeight: 'bold',      
            }}>Clique aqui!</button>
            <p>{text()}</p>
        </div>
    );

}

export default ToggleText;
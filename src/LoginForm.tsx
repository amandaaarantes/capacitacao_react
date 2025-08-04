import { useState } from "react";

function LoginForm(){

    const [usuario, setUsuario] = useState<string|null>(null);
    const [senha,setSenha] =useState<string|null>(null);

    const message = () => {
        alert("Usuário: " +usuario + "\nSenha: " + senha);
    }

    return(
        <div>
           <form onSubmit={message}>
            <h1>Login</h1> 
            <div>
                <div>
                <label htmlFor="user">User: </label>
                <input type="text" id="user" onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div>
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <button type="submit" style={{
                    backgroundColor: '#f97316',
                    color: 'white', 
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',      
                    fontSize: '16px',          
                    fontWeight: 'bold',         
                }}>Submit</button>
            </div>
           </form>
        </div>
    );
}

export default LoginForm;
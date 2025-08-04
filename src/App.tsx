import React from 'react';
import Greeting from './Greeting';
import Countdown from './Countdown';
import CheckBox from './CheckBox';
import LoginForm from './LoginForm';
import Random from './Random';
import ToggleText from './ToggleText';
import Timer from './Timer';


function App() {

  const styleDivComponentes = {
    backgroundColor: '#ffffff', 
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    width: '80%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  } as const;

  const styleComponentes = {
    backgroundColor: '#FAC898',   
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    width: '80%',
    maxWidth: '260px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  }

  return (
    <div style={{
    backgroundColor: '#cde2ee',   
    minHeight: '100vh',         
    display: 'flex',
    flexDirection: 'column',     
    alignItems: 'center',         
    padding: '40px 20px',        
    gap: '30px',                 
  }}>
      <div style={styleDivComponentes}>
        <div style={styleComponentes}>
          <Greeting name="Amanda" age={18} />
        </div>
        <div style={styleComponentes}>
          <Random />
        </div>
        <div style={styleComponentes}>
          <ToggleText />
        </div>
        <div style={styleComponentes}>
          <LoginForm />
        </div>
        <div style={styleComponentes}>
          <Countdown />
        </div>
        <div style={styleComponentes}>
          <CheckBox />
        </div>
        <div style={styleComponentes}>
          <Timer/>
        </div>
        </div>
    </div>
  );
}

export default App;

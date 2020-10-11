import React from 'react';
import Profile from './profile/Profile';
import pictures from './profile/img/pic-profile.png';

import './App.css';

function App() {
  const styleObject = {width : '90px'};
  const handleName = h => { 
    h.preventDefault();
    alert("Ghassen Cherif");
  }
  return (
    
    <div className="App">
      {/* <Profile ><a href="/" onClick={handleName}>Check Name</a></Profile> */}
      <Profile fullName={handleName} bio="Test of Bio" profession="student" ><img style={styleObject} src={pictures} alt='pic-pic'></img></Profile>
    </div>
  );
}

export default App;

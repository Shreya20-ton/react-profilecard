// src/App.js
import React from 'react';
import './App.css'; // for basic styling
import UserCard from './UserCard'; // our upcoming component

function App() {
  return (
    <div className="App">
      <UserCard name="Nidhi Shah" email="nidhi77@gmail.com"
       age={21} />
    </div>
    
  );
}

export default App;

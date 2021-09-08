import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText="Yeet world *dabs*"/>
      <MyNewComponent someText="Seems weird but ok"/>
    </div>
  );
}

export default App;

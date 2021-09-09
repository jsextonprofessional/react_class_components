import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent firstName="Harry" lastName="Potter" age="69" hairColor="Black"/>
      <MyNewComponent firstName="Hermione" lastName="Granger" age="420" hairColor="Brown"/>
      <MyNewComponent firstName="Ron" lastName="Weasley" age="20" hairColor="Red"/>
      <MyNewComponent firstName="Neville" lastName="Longbottom" age="2" hairColor="Brown"/>
    </div>
  );
}

export default App;

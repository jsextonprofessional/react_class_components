import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Harry" lastName="Potter" age="69" hairColor="Black"/>
      <PersonCard firstName="Hermione" lastName="Granger" age="420" hairColor="Brown"/>
      <PersonCard firstName="Ron" lastName="Weasley" age="20" hairColor="Red"/>
      <PersonCard firstName="Neville" lastName="Longbottom" age="2" hairColor="Blond(e)"/>
    </div>
  );
}

export default App;

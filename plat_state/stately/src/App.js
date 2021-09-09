import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={ () => { this.setState({ position: "Off" }) } }>Flip Switch</button>
    </div>
  );
}

export default App;

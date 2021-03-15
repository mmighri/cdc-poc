import logo from './logo.svg';
import './App.css';
import JSONPretty from 'react-json-pretty';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <JSONPretty id="json-pretty" data={localStorage.getItem("USER_PRINCIPAL")}></JSONPretty>

      </header>
    </div>
  );
}

export default App;

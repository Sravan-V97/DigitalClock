import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="clock">
        <h2>The Time is :</h2>
        <div id="time">
          <div><span id="hour">00</span><span>Hours</span></div>
          <div><span id="minutes">00</span><span>Minutes</span></div>
          <div><span id="seconds">00</span><span>Seconds</span></div>
          <div><span id="ampm">AM</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;

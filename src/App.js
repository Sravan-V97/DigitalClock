import './App.css';
import Analog from './components/analogClock/analog';
import Clock from './components/digitalClock/clock';

function App() {
  return (
    <div className="App">
     <Clock/>
     {/* <Analog/> */}
    </div>
  );
}

export default App;

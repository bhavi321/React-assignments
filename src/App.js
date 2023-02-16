import {useState} from "react"
import './App.css';

function App() {
const [state,setState]=useState(0)
  return (
    <div className="App">
      Count:{state}<br/>
      <button onClick={()=>setState(state+1)}>Increase</button><br/>
      <button onClick={()=>setState(state-1)}>Decrease</button>
    </div>
  );
}

export default App;

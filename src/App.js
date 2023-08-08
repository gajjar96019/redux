import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, demoapp, increment } from './app/counterSlice/reducer';

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(demoapp())}>Increment - 2</button>
    </div>
  );
}

export default App;

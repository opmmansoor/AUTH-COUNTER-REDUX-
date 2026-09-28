import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./app/counterSlice";
import { loggedIn, loggedOut } from "./app/loginSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>

        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div>
        {auth ? <h1>🔴</h1> : <h1>🟢</h1>}

        {auth ? (
          <button onClick={() => dispatch(loggedOut())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(loggedIn())}>Login</button>
        )}
      </div>
    </div>
  );
}
export default App;

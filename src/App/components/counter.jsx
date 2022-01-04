import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slice/counter";
export function Counter() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter {value}</h1>
      <button onClick={() => dispatch(increment())}>increse</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
    </div>
  );
}

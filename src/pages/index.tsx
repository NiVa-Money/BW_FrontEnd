import { AppDispatch, RootState } from '@/redux/configureStore';
import { decrement, increment } from '@/redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

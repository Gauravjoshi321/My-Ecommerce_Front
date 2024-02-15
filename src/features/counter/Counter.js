import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      counter
    </div>
  );
}


export default Counter;
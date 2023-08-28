import classes from './Counter.module.css';
import {counterActions} from '../store/CounterSlice'
import {useSelector , useDispatch} from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();
  const counter= useSelector(state=> state.counter.counter);
  const show= useSelector(state=> state.counter.showCounter);
  const incrementHandler=()=>{
    dispatch(counterActions.increase(1))
  }
  const decrementhandler=()=>{
    dispatch(counterActions.decrease(1))
  }
  const incrementby2Handler=()=>{
    dispatch(counterActions.increase(2))
  }
  const decrementby2handler=()=>{
    dispatch(counterActions.decrease(2))
  }
  const incrementby5Handler=()=>{
    dispatch(counterActions.increase(5))
  }
  const decrementby5handler=()=>{
    dispatch(counterActions.decrease(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div className={classes.action}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementhandler}>Decrement</button>
        <button onClick={incrementby2Handler}>Increment By 2</button>
        <button onClick={decrementby2handler}>Decrement By 2</button>
        <button onClick={incrementby5Handler}>Increment By 5</button>
        <button onClick={decrementby5handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  ); 
};

export default Counter;

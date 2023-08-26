import classes from './Counter.module.css';
import {useSelector , useDispatch} from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();
  const counter= useSelector(state=> state.counter);

  const incrementHandler=()=>{
    dispatch({type: 'increment'})
  }
  const decrementhandler=()=>{
    dispatch({type: 'decrement'})
  }
  const incrementby2Handler=()=>{
    dispatch({type: 'incrementby2'})
  }
  const decrementby2handler=()=>{
    dispatch({type: 'decrementby2'})
  }
  const incrementby5Handler=()=>{
    dispatch({type: 'incrementby5'})
  }
  const decrementby5handler=()=>{
    dispatch({type: 'decrementby5'})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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

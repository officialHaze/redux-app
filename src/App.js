import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import {increment, decrement} from "./state_management/actions/actions"

export default function App() {
  const numberState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()

  // handle increment and decrement
  const numberIncrease = ()=>{
    dispatch(increment)
  }
  const numberDecrease = ()=>{
    dispatch(decrement)
  }
  return (
    <div className="home-page">
      <div className="container">
        <div className="heading">
          <h1>Increment/Decrement number using redux</h1>
        </div>
        <div className="counter">
          <button onClick={numberDecrease}  className="decrease">-</button>
          <div style={{padding: '0 2rem'}}>{numberState}</div>
          <button onClick={numberIncrease} className="increase">+</button>
        </div>
      </div>
    </div>
  )
}

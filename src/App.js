import "./App.css"

export default function App() {
  return (
    <div className="home-page">
      <div className="container">
        <div className="heading">
          <h1>Increment/Decrement number</h1>
        </div>
        <div className="counter">
          <button  className="decrease">-</button>
          <div>counter value</div>
          <button className="increase">+</button>
        </div>
      </div>
    </div>
  )
}

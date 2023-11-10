import './App.css';
import { useState } from "react";

function Selected() {
  const [SelectedCar, setSelectedCar] = useState({car:"",color:""});
  const carList = ["A", "B", "C", "D"];
  const colorList = ["Green", "Yellow", "Blue", "Red", "Black", "Pink"];
  const handle = (props, value) => {
    setSelectedCar((prev) => {
      return {
        ...prev,
        [props]: value
      }
    })
  }
  return (
    <>
      <div>
        <h1>
          select Your Car
        </h1>
        Select a car 
        <select value={SelectedCar.car} onChange={(evt) => handle("car", evt.target.value)}>
          {carList.map((value, index) => {
            return (<option key={index}>
              {value}
            </option>)
          })}
        </select>
        <br/>
        <br/>
        Select a color 
        <select value={SelectedCar.color} onChange={(evt) => handle("color", evt.target.value)}>
          {colorList.map((value, index) => {
            return (<option key={index}>
              {value}
            </option>)
          })}
        </select>
        <h3>You selected a {SelectedCar.color} - {SelectedCar.car}</h3> 
      </div>
    </>
  )
}
export default Selected;
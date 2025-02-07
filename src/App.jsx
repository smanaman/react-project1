import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [Alldata, SetAlldata] = useState([])
  const [fillterdata, Setfilterdata] = useState([])
  const filtermen = () => {
    let men = Alldata.filter(val => val.category == "men's clothing")
   

    Setfilterdata(men)
  }

  const filterjewelery = () => {
    let jewelery = Alldata.filter(val => val.category == "jewelery")
  

    Setfilterdata(jewelery)
  }

  const filterelectronics = () => {
    let electronics = Alldata.filter(val => val.category == "electronics")
  

    Setfilterdata(electronics)
  }
  const filterwomen = () => {
    let women = Alldata.filter(val => val.category == "women's clothing")
  

    Setfilterdata(women)
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(rel => rel.json())
      .then(data => {
        console.log(data);

        SetAlldata(data)
        Setfilterdata(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  return (
    <>
      <div className="nav">
        <button onClick={() => filtermen()}>men</button>
        <button onClick={() => filterjewelery()}>jewelery</button>
        <button onClick={() => filterelectronics()}>electronics</button>
        <button onClick={() => filterwomen()}>women</button>
        <button onClick={() => Setfilterdata(Alldata)}>all</button>
      </div>
      <div className="card-main">
        <div className="main">
          {fillterdata.map((val) => (
            <div className="card">
              <img src={val.image} alt="Card Image" />
              <h2>{val.category}</h2>
              <p>{val.title}</p>
              <button>{val.price}$</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

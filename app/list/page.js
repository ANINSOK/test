'use client'

import { useState } from "react";

export default function List() {
  let name = "INSHAKE"
  let product = ["Tomat", "Jeruk", "Stroberi", "Pisang"]
  // let producPrice = ["5", "50", "20", "25"] 제품별 가격도 넣고 싶은데 어케하징?
  let [quantity, editQuantity] = useState([0,0,0,0]);
  return (
    <div>
      <h1 className="title" style={{fontSize:"80px", fontFamily:"fantasy", fontWeight:500}}>Products List</h1>
      { product.map((a,i) => {
          return (
          <div className="product" key={i}>
            <img src={ `/food${i}.png` } className="food-img"></img>
            <h4>{ a } 40$</h4>
            <button onClick={()=>{ editQuantity(quantity-1) }}>-</button>
            <span> { quantity[i] } </span>
            <button onClick={()=>{ 
              let copy = [...quantity]
              copy[i]++
              editQuantity(copy) }}>+</button>
          </div>
          )
        })
      }



      <h4 className="title-sub">dev by { name }</h4>
    </div>
  )
}

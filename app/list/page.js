
export default function List() {
  let name = "INSHAKE"
  let product = ["Tomat", "Jeruk", "Stroberi", "Pisang"]
  return (
    <div>
      <h1 className="title" style={{fontSize:"80px", fontFamily:"fantasy", fontWeight:500}}>Products List</h1>
      {/* <div className="product">
        <h4>{ product[0] } 40$</h4>
      </div>
      <div className="product">
        <h4>{ product[1] } 40$</h4>
      </div>
      <div className="product">
        <h4>{ product[2] } 40$</h4>
      </div>
      <div className="product">
        <h4>{ product[3] } 40$</h4>
      </div> */}
      {
      product.map((a,i) => {
        return (
        <div className="product" key={i}>
          <img src={ `/food${i}.png` } className="food-img"></img>
          <h4>{ a } 40$</h4>
        </div>
        )
      })
      }



      <h4 className="title-sub">dev by { name }</h4>
    </div>
  )
}

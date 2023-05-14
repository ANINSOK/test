import 안녕 from "./data.js"



export default function Cart() {
	let 장바구니 = ['Tomat', 'Jeruk', 'Stroberi', 'Pisang']
	return (
		<div>
			<h4 className="title">Cart</h4>
			<CartItem 물품={장바구니[0]}/>
			<CartItem 물품={장바구니[1]}/>
			<CartItem 물품={장바구니[2]}/>
			<CartItem 물품={장바구니[3]}/>
			<Btn color='red'/>
			<Btn color='blue'/>
		</div>
		
	)
}

function Btn(props){
	return(
			<button style={{ backgroundColor : props.color}}>
				버튼
			</button>
	)
}

function CartItem(props){
	return(
		<div className="cart-item">
			<p>{ props.물품 }</p>
			<p>$40</p>
			<p>1개</p>
		</div>
	)
}
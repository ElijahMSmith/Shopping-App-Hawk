import { CartIcon } from "./assets/CartIcon";

function Cart({ items }) {
	function handleClickCart() {
		console.log("You have " + items.length + " items in your cart!");
	}

	return (
		<button id="cartButton" onClick={handleClickCart}>
			<CartIcon />
			<p>{items.length}</p>
		</button>
	);
}

export default Cart;

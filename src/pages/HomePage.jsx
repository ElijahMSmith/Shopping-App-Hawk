import { useContext } from "react";
import { CartContext } from "../utils/cart";

function HomePage() {
	const { products } = useContext(CartContext);

	console.log(products);

	return (
		<div>
			<h2>Your Shopping Application</h2>
			<p>You have {products.length} products in your cart.</p>
		</div>
	);
}

export default HomePage;

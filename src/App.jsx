import { useState } from "react";
import "./App.css";
import ProductTable from "./ProductTable";
import { dummyData } from "./productData";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

function App() {
	const [searchBy, setSearchBy] = useState("");
	const [cartItems, setCartItems] = useState([]);

	function addToCart(item) {
		setCartItems([...cartItems, item]);
	}

	return (
		<>
			<div id="headerBar">
				<SearchBar makeSearch={setSearchBy} />
				<Cart items={cartItems} />
			</div>
			<ProductTable
				products={dummyData}
				searchBy={searchBy}
				addToCart={addToCart}
			/>
		</>
	);
}

export default App;

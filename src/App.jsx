import { useState } from "react";
import "./App.css";
import ProductTable from "./ProductTable";
import { dummyData } from "./productData";
import SearchBar from "./SearchBar";

function App() {
	// search bar state
	const [bar, setBar] = useState("");

	return (
		<>
			<SearchBar makeSearch={setBar} />
			<ProductTable x={dummyData} y={bar} />
		</>
	);
}

export default App;

/*
return (
    <SearchBar makeSearch="TODO" />
    <ProductTable x={dummyData} y={bar} />
);
*/

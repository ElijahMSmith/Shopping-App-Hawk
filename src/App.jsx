import "./App.css";
import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";
import { dummyData } from "./dummyData";

function App() {
	return (
		<>
			<SearchBar />
			<ProductsTable products={dummyData} />
		</>
	);

	/*
    - Create our products table - DONE
    - Create some dummy products - DONE
    - Show those products in the table - DONE
    - Add a search bar for some products
    */
}

export default App;

import { useState } from "react";
import ProductTable from "../../components/products/ProductTable";
import SearchBar from "../../components/SearchBar";
import { useLoaderData } from "react-router-dom";

function ProductListings() {
	const [searchBy, setSearchBy] = useState("");

	const data = useLoaderData();

	return (
		<>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					margin: 10,
				}}
			>
				<p style={{ margin: 0 }}>Showing page: 1 of 1</p>
				<SearchBar makeSearch={setSearchBy} />
			</div>
			<ProductTable products={data} searchBy={searchBy} />
		</>
	);
}

export default ProductListings;

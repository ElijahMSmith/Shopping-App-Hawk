import { useState } from "react";
import checkSearch from "./productData";

function SearchBar({ makeSearch }) {
	function onSubmitSearch(e) {
		e.preventDefault();
		console.log(item);

		if (item != "") {
			if (checkSearch(item) === false) {
				console.error("invalid search input!");
				return;
			} else {
				makeSearch(item);
				setItem("");
				return;
			}
		}

		console.error("Cannot perform empty search!");
	}

	const [item, setItem] = useState("");

	return (
		<>
			<form onSubmit={onSubmitSearch}>
				<input
					type="text"
					value={item}
					onChange={(e) => {
						setItem(e.target.value);
					}}
				/>
				<button type="submit">Search</button>
			</form>
		</>
	);
}

export default SearchBar;

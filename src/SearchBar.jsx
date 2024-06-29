import { useState } from "react";

function SearchBar() {
	// [data, setterFunc]
	const [searchTerm, setSearchTerm] = useState("");
	const [obj, setObj] = useState({ myNumber: 0, foo: "bar", zap: "pow" });

	function handleChange(event) {
		console.log("New term: " + searchTerm);
		setSearchTerm(event.target.value);
		console.log("hello");
	}

	function handleClick() {
		let randomNumber = Math.floor(Math.random() * 10);
		console.log("prev number: " + obj.myNumber);
		obj.myNumber = randomNumber;
		console.log("new number: " + randomNumber);
		setObj({ ...obj, myNumber: randomNumber });
	}

	return (
		<div>
			<input type="text" value={searchTerm} onChange={handleChange} />
			<button onClick={handleClick}>Search</button>
			<p>Your random number is {obj.myNumber}</p>
		</div>
	);
}

export default SearchBar;

import { useNavigate } from "react-router-dom";

function NavBar() {
	// state
	const navigate = useNavigate();

	// handler functions

	// useEffects

	return (
		<div style={{ margin: 10 }}>
			<h1>Header Bar Name</h1>
			<button
				className="homeButton"
				style={{ fontSize: "1.2em", marginRight: 15 }}
				onClick={() => navigate("/")}
			>
				Homepage
			</button>
			
			<button
				className="productButton"
				style={{ fontSize: "1.2em", marginRight: 15 }}
				onClick={() => navigate("/product")}
			>
				Products
			</button>
		</div>
	);
}

export default NavBar;

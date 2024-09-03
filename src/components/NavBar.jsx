import { useNavigate } from "react-router-dom";

function NavBar() {
	const navigate = useNavigate();

	return (
		<div style={{ margin: 10 }}>
			<button
				style={{ fontSize: 24, marginRight: 15 }}
				onClick={() => navigate("/")}
			>
				Homepage
			</button>
			-
			<button
				style={{ fontSize: 24, marginLeft: 15 }}
				onClick={() => navigate("/product")}
			>
				Products
			</button>
		</div>
	);
}

export default NavBar;

import { Outlet } from "react-router-dom";

function ProductsRoot() {
	return (
		<div style={{ padding: 10, boxSizing: "border-box" }}>
			<Outlet />
		</div>
	);
}

export default ProductsRoot;

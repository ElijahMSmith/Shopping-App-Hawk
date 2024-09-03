import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

function RootLayout() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}

export default RootLayout;

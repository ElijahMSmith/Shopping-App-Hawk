import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsRoot from "./pages/products/Root.jsx";
import ProductListings from "./pages/products/ProductListings.jsx";

import NotFound from "./pages/NotFound.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import { loadProducts } from "./utils/productData.js";
import "./index.css";
import CartProvider from "./utils/cart.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "product",
				element: <ProductsRoot />,
				children: [
					{
						path: "",
						element: <ProductListings />,
						loader: async () => loadProducts(),
					},
					// {
					// 	path: ":id",
					// 	element: <ProductInfo />,
					// 	loader: async ({ params }) => {
					// 		const n = Number(params.id);
					// 		if (isNaN(n)) return null;

					// 		let product = loadProductById(n);
					// 		console.log(product);
					// 		return product;
					// 	},
					// },
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</React.StrictMode>
);

/*

useContext

Cart: Product[]
- Get items in my cart
- Remove an item (cart display page)
- Add an item
- Increase or decrease a quantity of an item
- Clear all items from our cart

*/

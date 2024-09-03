import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsRoot from "./pages/products/Root.jsx";
import ProductListings from "./pages/products/ProductListings.jsx";
import ProductInfo from "./pages/products/ProductInfo.jsx";
import NotFound from "./pages/NotFound.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import { loadProductById, loadProducts } from "./utils/productData.js";

/*

Homepage
- Greet the user
- Have buttons to go to other pages

Product Listings Table
- Search feature
- Table of all products

View individual product
- If I click on a product from the table, 
  show more information about this product

Invalid Page

*/

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
					{
						path: ":id",
						element: <ProductInfo />,
						loader: async ({ params }) => {
							const n = Number(params.id);
							if (isNaN(n)) return null;

							let product = loadProductById(n);
							console.log(product);
							return product;
						},
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

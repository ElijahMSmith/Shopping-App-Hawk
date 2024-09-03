import { useLoaderData } from "react-router-dom";

function ProductInfo() {
	const product = useLoaderData();
	console.log("Product Info", product);

	if (!product) {
		return <h3>Product does not exist!</h3>;
	}

	return (
		<>
			<img src={product.image} />
			<p>{product.name}</p>
		</>
	);
}

export default ProductInfo;

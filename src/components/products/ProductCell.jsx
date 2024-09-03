import { useNavigate } from "react-router-dom";

function ProductCell({ product }) {
	const navigate = useNavigate();

	return (
		<div
			style={{ cursor: "pointer" }}
			onClick={() => {
				navigate(`/product/${product.id}`);
			}}
		>
			<img
				id="productImage"
				src={product.image}
				alt="This would be a cool product :("
			/>
			<div id="productTextContainer">
				<h2 id="productName">{product.name}</h2>
				<div id="productSubtitleRow">
					<h4 id="productSeller">{product.seller}</h4>-
					<h4 id="productPrice">${product.price}</h4>
				</div>
				<p id="productDescription">{product.description}</p>
			</div>
		</div>
	);
}

export default ProductCell;

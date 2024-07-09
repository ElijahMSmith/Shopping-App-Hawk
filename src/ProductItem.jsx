function ProductItem({ product, addToCart }) {
	return (
		<>
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
				<button onClick={() => addToCart(product)}>Add to Cart</button>
			</div>
		</>
	);
}

export default ProductItem;

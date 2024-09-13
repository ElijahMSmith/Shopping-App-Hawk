import styles from "./ProductCell.module.css";
import { useContext } from "react";
import { CartContext } from "../../utils/cart";

function ProductCell({ product }) {
	const { addProductToCart } = useContext(CartContext);

	return (
		<div>
			<img
				className={styles.displayImage}
				src={product.image}
				alt="This would be a cool product :("
			/>
			<div className={styles.container}>
				<div style={{ display: "flex" }}>
					<h2 className={styles.name}>{product.name}</h2>
					<button
						style={{ height: 30, width: 100, marginLeft: 20 }}
						onClick={() => addProductToCart(product, 1)}
					>
						Add to Cart
					</button>
				</div>
				<div className={styles.infoContainer}>
					<h4 className={styles.seller}>{product.seller}</h4>-
					<h4 className={styles.price}>${product.price}</h4>
				</div>
				<p className={styles.description}>{product.description}</p>
			</div>
		</div>
	);
}

export default ProductCell;

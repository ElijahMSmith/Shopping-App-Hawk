import ProductItem from "./ProductItem";
import "./ProductTable.css";

function ProductTable({ products, searchBy, addToCart }) {
	let filteredProducts = products.filter(
		(product) => product.name.toLowerCase().indexOf(searchBy) != -1
	);

	return (
		<table>
			<tbody>
				{filteredProducts.map((product) => {
					return (
						<tr key={product.id}>
							<td id="productsContainer">
								<ProductItem
									product={product}
									addToCart={addToCart}
								/>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default ProductTable;

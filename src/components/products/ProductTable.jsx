import ProductCell from "./ProductCell";
import "./ProductTable.css";

function ProductTable({ products, searchBy }) {
	let filteredProducts = products.filter(
		(product) => product.name.toLowerCase().indexOf(searchBy) != -1
	);

	return (
		<table style={{ width: "100%" }}>
			<tbody>
				{filteredProducts.map((product) => {
					return (
						<tr key={product.id}>
							<td id="productsContainer">
								<ProductCell product={product} />
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default ProductTable;

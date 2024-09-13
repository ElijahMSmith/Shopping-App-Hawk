import ProductCell from "./ProductCell";
import style from "./ProductTable.module.css";

function ProductTable({ products, searchBy }) {
	let filteredProducts = products.filter(
		(product) => product.name.toLowerCase().indexOf(searchBy) != -1
	);

	return (
		<>
			<h1 className={style.name}>All Products</h1>
			<table style={{ width: "100%" }}>
				<tbody>
					{filteredProducts.map((product) => {
						return (
							<tr key={product.id}>
								<td
									id="productsContainer"
									style={{ display: "flex", flexDirection: "column" }}
								>
									<ProductCell product={product} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default ProductTable;

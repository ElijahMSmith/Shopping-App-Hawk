function ProductsTable({ products }) {
	return (
		<table>
			<tbody>
				{products.map((product) => {
					return (
						<tr key={product.id}>
							<td>
								<img src={product.picture} />
								<h2>{product.name}</h2>
								<h4>{product.price}</h4>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default ProductsTable;

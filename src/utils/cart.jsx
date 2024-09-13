import { createContext, useState } from "react";

const CartContext = createContext(null);

function CartProvider({ children }) {
	// ProductInCart[]
	const [cart, setCart] = useState([]);

	function addProductToCart(newProduct, quantity) {
		for (let i = 0; i < cart.length; i++) {
			const thisProduct = cart[i];
			if (thisProduct.product.id === newProduct.id) {
				thisProduct.quantity += quantity;
				setCart([...cart]);
				return;
			}
		}

		setCart([...cart, { product: newProduct, quantity }]);
	}

	return (
		<CartContext.Provider
			value={{
				products: cart,
				addProductToCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;

export { CartContext };

/*
    ProductInCart
    {
        product: Product,
        quantity: number,
    }
    */

/*
    Product
    {
        id: number,
        name: string,
        seller: string,
        description: string,
        image: string,
        price: number,
    }
*/

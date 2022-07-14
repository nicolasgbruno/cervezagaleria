import React, {useState, useContext} from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
            product.quantity += quantity;
            newCart = [...cart];
        } else {
            product = {...item, quantity: quantity};
            newCart = [...cart, product];
        }
        setCart(newCart);
    }

    console.log(cart);

    const clearCart = () => setCart([]);

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));





  return (
    <CartContext.Provider value={{
        addProduct,
        clearCart,
        isInCart,
        removeProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
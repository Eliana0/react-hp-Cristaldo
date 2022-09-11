import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, qty) => {
        let itemDeCarrito = {...item, qty}
        setCartList([
            ...cartList, 
            itemDeCarrito
        ])
        const existe = itemDeCarrito.some(item => item.id == itemDeCarrito.id);
        console.log(existe)
    }

    const eliminarItem = (id) =>{
        let eliminado = cartList.filter(item => item.id !== id);
        setCartList(eliminado)
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{cartList, addItem, eliminarItem, clear}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
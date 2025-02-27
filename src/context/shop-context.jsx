import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
     let cart = {}
     for (let i = 1; i < PRODUCTS.length + 1; i ++){
        cart[i] = 0;
     }
     return cart;
    };

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const getTotalAmount = () => {
        let totalAmount = 0;
        for ( const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount;
    };
    
    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev,[itemID]: prev[itemID] + 1}));
    };

    const deleteFromCart = (itemID) => {
        setCartItems((prev) => ({...prev,[itemID]: prev[itemID] - 1}));
    };

    const changeItemCount = (newTotal, itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: newTotal}))
    };

    const contextValue = { cartItems, addToCart, deleteFromCart, changeItemCount, getTotalAmount};
    console.log(cartItems)

    return ( 
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
     );
}
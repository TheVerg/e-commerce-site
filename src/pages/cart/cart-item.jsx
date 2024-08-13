import React from "react";
import { useContext } from "react";
import {ShopContext} from '../../context/shop-context';
import "./cart.css";

export const CartItem = (props) => {
    const { id, productName, price, productImage} = props.data;
    const { cartItems, addToCart, deleteFromCart, changeItemCount} = useContext(ShopContext);

    return ( 
        <div className="cartItem">
            
            <img src={productImage} />

            <div className="preview">
                <p><b>
                    {productName}
                    </b></p>
                    <p>{price}</p>
                    
            <div className="countItems">
                <button onClick={() => deleteFromCart(id)} >-</button>
                <input value={cartItems[id]} onChange={(e) => changeItemCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
            </div>

        </div>
     );
}
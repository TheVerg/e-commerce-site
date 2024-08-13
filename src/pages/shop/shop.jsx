import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (  
        <div className="Shop">
            <div className="shop-name">
                <h1>Treasure Chest</h1>
            </div>
            <div className="products">{PRODUCTS.map((product) =>(
                <Product data={product} />
            ) )}</div>
        </div>
    );
}
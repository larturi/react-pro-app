import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    
    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductQuantityChange = ({quantity, product}: {quantity: number, product: Product}) => {
        setShoppingCart(oldShoppingCart => {

           if (quantity === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
           }

           return {
                ...oldShoppingCart,
                [product.id]: { ...product, quantity }
            }
                
        });
    }

    return {
        shoppingCart,
        onProductQuantityChange
    }
 

}

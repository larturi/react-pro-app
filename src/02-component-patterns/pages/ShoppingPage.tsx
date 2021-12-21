import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';

const product1 = {
    id: '1',
    title: 'Cofee Mug',
    img: './coffee-mug.png',
}

const product2 = {
    id: '2',
    title: 'Cofee Mug Meme',
    img: './coffee-mug2.png',
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    quantity: number;
}

export const ShoppingPage = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductQuantityChange = ({quantity, product}: {quantity: number, product: Product}) => {
        setShoppingCart(oldShoppingCart => {

            if (quantity === 0) {
                const { [product.id]: toDelete, ...rest  } = oldShoppingCart;
                return rest;
            }
                
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, quantity}
            }
        });
    }
 
    return (
        <div>
            <h1>ShoppingStore</h1>
            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}>

                {products.map((product: Product) => {
                    return (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            onChange={ onProductQuantityChange }
                        >
                            <ProductImage className='custom-image' />  
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    )
                })}
            </div>

            <div className='shopping-cart'>
               {
                     Object.keys(shoppingCart).map(key => {
                            const product = shoppingCart[key];
                            return (
                                <ProductCard 
                                    key={product.id}
                                    product={product}
                                    className='bg-dark text-white'
                                    style={{ width: '100px' }}
                                    value={product.quantity}
                                >
                                    <ProductImage className='custom-image' />  
                                    <ProductButtons className='custom-buttons' style={{ marginTop: '-9px' }} />
                                </ProductCard>
                            )
                        }
                    )
               }
            </div>

        </div>
    )
}

export default ShoppingPage;

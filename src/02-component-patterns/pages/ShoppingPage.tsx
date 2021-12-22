import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useShoppingCart } from '../hooks/useShoppingCart';

import { products } from '../data/products';

export const ShoppingPage = () => {

    const { onProductQuantityChange, shoppingCart } = useShoppingCart();

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
                            value={ shoppingCart[product.id] ? shoppingCart[product.id].quantity : 0 }
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
                                    onChange={ onProductQuantityChange }
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

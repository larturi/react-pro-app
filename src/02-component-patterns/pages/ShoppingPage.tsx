import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingStore</h1>
            <hr />

            <ProductCard 
                key={product.id}
                product={product}
                className='bg-dark text-white'
                initialValues={{
                    quantity: 5,
                    maxQuantity: 7,
                }}
            >
                {
                    ({ reset, quantity, increaseBy, isMaxQuantity }) => (
                        <>
                            <ProductImage className='custom-image' />  
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />

                            <button onClick={reset}>Reset</button>

                            { quantity > 0 ? <button onClick={() => increaseBy(-2)}>-2</button> : null }
                            { !isMaxQuantity ? <button onClick={() => increaseBy(2)}>+2</button> : null }
                        </>
                    )
                }
                
            </ProductCard>
        </div>
    )
}

export default ShoppingPage;

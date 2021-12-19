import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Cofee Mug',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingStore</h1>
            <hr />

            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
            }}>

                <ProductCard 
                    product={product} 
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className='custom-image' />  
                    <ProductCard.Title title={'Hola'} className='text-bold' />
                    <ProductCard.Buttons className='custom-buttons' />
                </ProductCard>

                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image' />  
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>

                <ProductCard 
                    product={product}
                    style={{
                        background: '#70d1f8',
                    }}
                >
                    <ProductImage style={{
                        boxShadow: '0 0 10px #000',
                    }}/>  
                    <ProductTitle style={{
                        color: '#fff',
                    }}/>
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end',
                    }}/>
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;

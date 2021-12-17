import { ProductCard } from "../components/ProductCard";

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
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
            </div>
        </div>
    )
}

export default ShoppingPage;

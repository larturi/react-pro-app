import { createContext, ReactElement, CSSProperties } from 'react';
import { InitialValues, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const {increaseBy, counter, isMaxQuantity, reset} = useProduct({ 
        onChange, 
        product, 
        value,
        initialValues,
    });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxQuantity: initialValues?.maxQuantity,
        }}>
            <div 
                className={ `${ styles.productCard } ${className}` }
                style={ style }
            >
                { children({
                    quantity: counter,
                    isMaxQuantity,
                    maxQuantity: initialValues?.maxQuantity,
                    product,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    )
}

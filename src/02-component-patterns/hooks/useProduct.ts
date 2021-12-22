import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface ProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export const useProduct = ({onChange, product, value = 0}: ProductArgs) => {

    const [counter, setCounter] = useState(value);

    const isControl = useRef(!!onChange)

    const increaseBy = (value: number) => {

        if (isControl.current) {
            return onChange!({
                quantity: value,
                product
            })
        }

        
        setCounter(prev => Math.max(prev + value, 0));

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ quantity: newValue, product});
    }

    useEffect(() => {
       setCounter(value);
    }, [value])

    return {
        increaseBy,
        counter,
    }
}

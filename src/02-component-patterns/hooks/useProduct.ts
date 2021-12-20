import { useState } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface ProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
}

export const useProduct = ({onChange, product}: ProductArgs) => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0));

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        onChange && onChange({ quantity: newValue, product});
    }

    return {
        increaseBy,
        counter,
    }
}

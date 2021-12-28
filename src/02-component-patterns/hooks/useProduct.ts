import { useEffect, useRef, useState } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface ProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: ProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.quantity || value);
    const isMouted = useRef(false);

    const reset = () => {
        setCounter(initialValues?.quantity || value);
    };

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxQuantity) {
            newValue = Math.min(newValue, initialValues.maxQuantity);
        }

        setCounter(newValue);

        onChange && onChange({ quantity: newValue, product});
    };

    useEffect(() => {
        if (!isMouted.current) return;
       setCounter(value);
    }, [value]);

    useEffect(() => {
        isMouted.current = true;
    }, []);

    return {
        counter,
        isMaxQuantity: !!initialValues?.quantity && counter === initialValues.maxQuantity,
        maxQuantity: initialValues?.maxQuantity,
        increaseBy,
        reset,
    }
}

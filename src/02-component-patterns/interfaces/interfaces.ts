import { Props as ProductCardsProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps  } from "../components/ProductImage";
import { Props as ProductButtonsProps  } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxQuantity?: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardsProps): JSX.Element,
    Title: ( Props: ProductTitleProps ) => JSX.Element,
    Image: ( Props: ProductImageProps ) => JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element
}

export interface OnChangeArgs {
    product: Product;
    quantity: number;
}

export interface ProductInCart extends Product {
    quantity: number;
}

export interface InitialValues {
    quantity?: number;
    maxQuantity?: number;
}

export interface ProductCardHandlers {
    quantity: number;
    isMaxQuantity: boolean;
    maxQuantity?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}
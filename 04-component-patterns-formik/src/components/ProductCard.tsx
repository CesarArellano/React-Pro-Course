import { ReactElement, createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Extensible Styles Pattern (add className and style)
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: ( args: ProductCardHandlers ) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, reset, isMaxCountReached } = useProduct({ onChange, product, value, initialValues });
  
  return (
    <Provider value={{
      counter,
      maxCount,
      increaseBy,
      product
    }}>
      <div
        className={ `${ styles.productCard } ${ className }` }
        style={ style }
      >
        { children({
          reset,
          product,
          maxCount,
          increaseBy,
          count: counter,
          isMaxCountReached,
        }) }
      </div>
    </Provider>
  )
}
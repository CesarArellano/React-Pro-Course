import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from "../interfaces/interfaces";


interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const useProduct = ( { product, onChange, value = 0 }: useProductArgs ) => {
  const [counter, setCounter] = useState(value);

  // Control Props Pattern (value and onChange properties)
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value])
  

  const increaseBy = ( value: number ) => {
    if( isControlled.current ) {
      return onChange!({ product, count: value });
    }
    const newValue = Math.max(counter + value, 0);
    setCounter( newValue )
  }

  return {
    counter,
    increaseBy
  }

}
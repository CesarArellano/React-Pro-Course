import { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";


interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues // State Initializater.
}

export const useProduct = ( { product, onChange, value = 0, initialValues = {} }: useProductArgs ) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);
  // Control Props Pattern (value and onChange properties)
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    if( !isMounted.current ) return;
    setCounter(value);
  }, [value])

  useEffect(() => {
    isMounted.current = true;
  }, [])
  

  const increaseBy = ( value: number ) => {
    if( isControlled.current ) {
      return onChange!({ product, count: value });
    }
    
    let newValue = Math.max(counter + value, 0);
    
    if( initialValues?.maxCount ) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter( newValue )
  }

  const reset = () => {
    setCounter(initialValues.count || value)
  }

  return {
    reset,
    counter,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
  }

}
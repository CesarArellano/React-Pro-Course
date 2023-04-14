import { useCallback, useContext, useRef } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties,
}

export const ProductButtons = ({ className, style }: Props) => {
  const { maxCount, counter, increaseBy } = useContext( ProductContext );

  const isMaxReached = useCallback(
    () => (!!maxCount && maxCount == counter),
    [counter, maxCount],
  )
  
  const handleIncreaseBy = () => {
    !isMaxReached() && increaseBy(1);
  }
  
  return (
    <div 
      className={ `${ styles.buttonsContainer } ${ className }`}
      style={ style }
    >
      <button className={ styles.buttonMinus } onClick={ () => increaseBy(-1) }> - </button>
      <div className={ styles.countLabel}>{ counter }</div>
      <button 
        className={ `${ styles.buttonAdd } ${ isMaxReached() ? styles.disabled : '' }` }
        onClick={ handleIncreaseBy }
      >
          +
      </button>
    </div>
  )
}
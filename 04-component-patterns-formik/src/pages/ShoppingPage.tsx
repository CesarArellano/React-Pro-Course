import { product1 } from '../data/products';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index';

import '../styles/custom-styles.css'

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <ProductCard
          product={ product1 }
          className='bg-dark text-white'
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {
            ({ reset, increaseBy, count, isMaxCountReached, maxCount, product }) => (
              <>
                <ProductImage className='custom-image' />
                <ProductTitle 
                  title={ product.title }
                  className='text-bold'
                />
                <ProductButtons className='custom-buttons' />
                <button onClick={ reset }> Reset </button>
                <button onClick={ () => increaseBy(-2) }> -2 </button>
                { !isMaxCountReached &&  <button onClick={ () => increaseBy(2) }> +2 </button> }
                <span>{ count } - { maxCount }</span>
              </>
            )
          }
        </ProductCard>
      </div>
    </div>
  )
}

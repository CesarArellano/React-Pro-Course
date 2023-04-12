import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index';

import '../styles/custom-styles.css'

export const ShoppingPage = () => {

  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        {
          products.map((product) => {
            return (
              <ProductCard
                key={ product.id }
                product={ product }
                className='bg-dark text-white'
                onChange={ onProductCountChange }
                value={ shoppingCart[product.id]?.count || 0 }
              >
                <ProductImage className='custom-image' />
                <ProductTitle 
                  title={ product.title }
                  className='text-bold'
                />
                <ProductButtons className='custom-buttons' />
              </ProductCard>
            )
          })
        }
      </div>
      <div className='shopping-cart'>
        {
          Object.entries(shoppingCart).map(([ key, product ]) => {
            return (
              <ProductCard
                key={ key }
                product={ product }
                className='bg-dark text-white'
                style={{ width: 100 }}
                onChange={ onProductCountChange }
                value={ product.count }
              >
                <ProductCard.Image className='custom-image' />
                <ProductCard.Buttons className='custom-buttons' />
              </ProductCard>
            )
          })
        }
      </div>
    </div>
  )
}

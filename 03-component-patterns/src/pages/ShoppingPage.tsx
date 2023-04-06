import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'

const product: Product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

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
          product={ product } 
        >
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title 
            title='Another product'
          />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard
          product={ product }
          className='bg-dark text-white'  
        >
          <ProductImage className='custom-image' />
          <ProductTitle 
            title='Another product'
            className='text-bold'
          />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
        <ProductCard
          product={ product }
          style={{
            backgroundColor: '#1dfaaa',
          }}
        >
          <ProductImage className='custom-image' />
          <ProductTitle 
            title='Another product'
          />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

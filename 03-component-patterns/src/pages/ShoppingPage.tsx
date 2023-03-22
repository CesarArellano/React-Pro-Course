import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components/index';
import { Product } from '../interfaces/interfaces';


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
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title='Another product'/>
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

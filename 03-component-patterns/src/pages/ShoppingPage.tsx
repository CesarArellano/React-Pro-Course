import { Product, ProductCard } from '../components/ProductCard';

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
          <ProductCard.Image />
          <ProductCard.Title title='Another product'/>
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}

import { ProductDisplay } from "components/ProductDisplay";
import type { Products } from 'types/types'

type Props = {
  products: Products[];
  handler: (arg0: number) => void
}

const style = {
  border: "none",
  color: "CornflowerBlue",
  padding: "0.2rem 0.8rem",
  marginLeft: "1rem",
  cursor: "pointer"
};

export const Basket = ({ products, handler }: Props) => {
  return (
    <>
      {products.map((product, index) => (
        <ProductDisplay key={`$basket-item-${index}`} product={product}>
          {" "}
          <button style={style} onClick={() => handler(index)}>
            <span role="img" aria-label="Add to cart">
              ❌
            </span>
            remove from cart
          </button>
        </ProductDisplay>
      ))}
    </>
  );
};
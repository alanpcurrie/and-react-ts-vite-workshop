import { ProductDisplay } from "components/ProductDisplay";
import styled from "styled-components/macro";
import type { Products } from 'types/types'

type Props = {
  products: Products[];
  handler: (arg0: number) => void
}

const StyledButton = styled.button`
  border: none;
  color: cornflowerBlue;
  padding: 0.2rem 0.8rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const ProductList = ({ products, handler }: Props) => {
  return (
    <>
      {products.map((product, index) => (
        <ProductDisplay key={`$product-list-item-${index}`} product={product}>
          <StyledButton onClick={() => handler(index)}>
            <span role="img" aria-label="Add to cart">
              ➕
            </span>
            Add to cart
          </StyledButton>
        </ProductDisplay>
      ))}
    </>
  );
};
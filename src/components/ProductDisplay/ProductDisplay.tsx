import styled from "styled-components/macro";
import { SMALL_MARGIN_BOTTOM } from "utils/spacing";
import { StyledSpacer } from "styles/styles";
import type { ReactNode, Products } from 'types/types'

type Props = {
  product: Products;
  children: ReactNode;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: centre;
  gap: 10px;
  align-items: centre;
  padding: 1rem;
  background: hotpink;
  color: white;
  border: 1px solid hotpink;
  border-radius: 5px;
`;

export const ProductDisplay = ({ product, children }: Props) => {
  return (
    <>
      <StyledWrapper>
        {`${product.title} £${product.price}`}
        {children}
      </StyledWrapper>
      <StyledSpacer height={SMALL_MARGIN_BOTTOM} />
    </>
  );
};

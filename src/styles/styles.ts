import styled from "styled-components/macro";

interface Props {
  height: string;
  width: string;
}

// export const StyledSpacer = styled.div<Partial<Props>>`
//   height: ${({ height }) => height};
// `;

export const StyledSpacer = styled.div<Pick<Props, 'height'>>`
  height: ${({ height }) => height};
`;

// export const StyledContainer = styled.div<Partial<Props>>`
//   width: ${({ width }) => width};
// `;

export const StyledContainer = styled.div<Pick<Props, 'width'>>`
  width: ${({ width }) => width};
`;

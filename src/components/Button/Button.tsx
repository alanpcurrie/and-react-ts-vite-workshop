import { ClassAttributes, ButtonHTMLAttributes } from 'react';
import type { ReactNode, ReactCSSProperties } from 'types/types'

type Props = {
  style: ReactCSSProperties;
  ariaLabel: string;
  emoji: string;
  children: ReactNode
}

const style = {
  border: "none",
  color: "CornflowerBlue",
  padding: "0.2rem 0.8rem",
  marginLeft: "1rem",
  cursor: "pointer"
};

export const Button = ({ style, ariaLabel, emoji, children }: Props, props: JSX.IntrinsicAttributes & ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button style={style} {...props}>
        <span role="img" aria-label={ariaLabel}>
          {emoji}
        </span>
        {children}
      </button>
    </>
  );
};

import React from 'react';
import styles from './Button.module.css';

interface BtnProps {
  primary?: boolean;
  backgroundColor?: string;
  textColor?: string;
  coverage?: string;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  animation?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  height?: number;
}

export const ButtonGlobal = ({
  primary = true,
  size = 'medium',
  backgroundColor,
  textColor,
  coverage,
  children,
  className,
  animation,
  handleClick,
  height,
  type = 'button',
  disabled = false
}: BtnProps) => {
  const mode = primary ? styles['btn--primary'] : styles['btn--secondary'];

  let animationClass;
  switch (animation) {
    case 'swipe':
      animationClass = primary ? styles['animation-swipe--primary'] : styles['animation-swipe--secondary'];
      break;
    case 'wave':
      animationClass = primary ? styles['animation-wave--primary'] : styles['animation-wave--secondary'];
      break;
    case 'open':
      animationClass = primary ? styles['animation-open--primary'] : '';
      break;
    case 'middle':
      animationClass = primary
        ? [styles['animation-middle--primary'], styles['animation-middle--primary-s']].join(' ')
        : [styles['animation-middle--secondary'], styles['animation-middle--secondary-s']].join(' ');
      break;
    case 'none':
      animationClass = '';
      break;
    default:
      animationClass = primary ? styles['animation-swipe--primary'] : styles['animation-swipe--secondary'];
      break;
  }

  return (
    <button
      className={[
        styles['btn'],
        styles[`btn--${size}`],
        mode,
        !disabled && animationClass,
        disabled && styles['btn--disable'],
        className
      ].join(' ')}
      onClick={handleClick}
      style={
        {
          height: height,
          '--bg-color': backgroundColor,
          '--text-color': textColor,
          '--coverage': coverage
        } as React.CSSProperties
      }
      type={type}
      disabled={disabled}
    >
      <div className='z-[50]'>{children}</div>
    </button>
  );
};

import React from 'react';
import styles from './LinkGlobal.module.css';
import { Link } from '@/i18n/routing';

interface LinkBtnProps {
  link: string;
  primary?: boolean;
  backgroundColor?: string;
  textColor?: string;
  coverage?: string;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  animation?: string;
  handleClick?: () => void;
  className?: string;
}

export const LinkGlobal = ({
  link,
  primary = true,
  size = 'medium',
  backgroundColor,
  textColor,
  coverage,
  children,
  className,
  animation,
  handleClick
}: LinkBtnProps) => {
  const mode = primary ? styles['link-btn--primary'] : styles['link-btn--secondary'];

  let animationClass;
  switch (animation) {
    case 'swipe':
      animationClass = primary ? styles['link-animation-swipe--primary'] : styles['link-animation-swipe--secondary'];
      break;
    case 'wave':
      animationClass = primary ? styles['link-animation-wave--primary'] : styles['link-animation-wave--secondary'];
      break;
    case 'open':
      animationClass = primary ? styles['link-animation-open--primary'] : '';
      break;
    case 'middle':
      animationClass = primary
        ? [styles['link-animation-middle--primary'], styles['link-animation-middle--primary-s']].join(' ')
        : [styles['link-animation-middle--secondary'], styles['link-animation-middle--secondary-s']].join(' ');
      break;
    default:
      animationClass = primary ? styles['link-animation-swipe--primary'] : styles['link-animation-swipe--secondary'];
      break;
  }
  return (
    <Link href={link} passHref>
      <button
        className={[styles['link-btn'], styles[`link-btn--${size}`], mode, animationClass, className].join(' ')}
        onClick={handleClick}
        style={
          {
            '--bg-color': backgroundColor,
            '--text-color': textColor,
            '--coverage': coverage
          } as React.CSSProperties
        }
      >
        <div className='z-[50]'>{children}</div>
      </button>
    </Link>
  );
};

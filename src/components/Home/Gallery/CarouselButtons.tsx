import React, { FC, ReactNode } from 'react';

interface CarouselButtonProps {
  enabled: boolean;
  onClick: () => void;
  className?: string;
  children: ReactNode;
  'aria-label'?: string;
}

const CarouselButton: FC<CarouselButtonProps> = ({
  enabled,
  onClick,
  className = '',
  children,
  ...props
}) => (
  <button
    className={`w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-dark hover:bg-white transition-colors ${className} ${
      !enabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    }`}
    onClick={onClick}
    disabled={!enabled}
    type="button"
    {...props}
  >
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  </button>
);

export const PrevButton: FC<Omit<CarouselButtonProps, 'children'>> = (props) => (
  <CarouselButton
    {...props}
    aria-label="Previous slide"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </CarouselButton>
);

export const NextButton: FC<Omit<CarouselButtonProps, 'children'>> = (props) => (
  <CarouselButton
    {...props}
    aria-label="Next slide"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </CarouselButton>
);

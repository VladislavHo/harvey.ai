
interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export default function BurgerMenu({ isOpen, onClick, className = '' }: BurgerMenuProps) {
  return (
    <button
      className={`relative w-8 h-8 flex flex-col justify-center items-center bg-transparent border-none cursor-pointer ${className}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {/* Верхняя линия */}
      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'rotate-45 translate-y-[1px]' 
            : 'rotate-0 -translate-y-1'
        }`}
      />
      

      <span
        className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen 
            ? '-rotate-45 -translate-y-[1px]' 
            : 'rotate-0 translate-y-1'
        }`}
      />
    </button>
  );
}
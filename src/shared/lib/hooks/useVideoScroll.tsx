import { useState, useEffect, RefObject } from 'react';

export const useVideoScroll = (ref: RefObject<HTMLElement>, initialWidth: number = 60, maxWidth: number = 100) => {
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        // Рассчитываем прогресс на основе позиции элемента
        let scrollProgress = 0;
        
        // Общее расстояние от появления элемента до его полного исчезновения
        const totalScrollDistance = windowHeight + elementHeight;
        
        // Текущее пройденное расстояние (когда rect.top = windowHeight, progress = 0)
        // (когда rect.top = -elementHeight, progress = 1)
        const currentScrollDistance = windowHeight - rect.top;
        
        if (currentScrollDistance > 0 && currentScrollDistance <= totalScrollDistance) {
          scrollProgress = currentScrollDistance / totalScrollDistance;
        } else if (currentScrollDistance > totalScrollDistance) {
          scrollProgress = 1;
        }
        
        // Ограничиваем прогресс от 0 до 1
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Рассчитываем новую ширину
        const newWidth = initialWidth + (scrollProgress * (maxWidth - initialWidth));
        
        setWidth(newWidth);
      }
    };

    // Вызываем handleScroll при монтировании для установки начального состояния
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, initialWidth, maxWidth]);

  return width;
};
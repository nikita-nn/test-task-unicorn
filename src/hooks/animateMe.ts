import { useEffect, useState } from "react";

/**
 * Хук для создания базовой анимации
 * @params baseClass - параметр показывающий базовый стиль обьекта, к которому применяется анимация
 */

export const useAnimate = (baseClass: string) => {
  const animatedClass = baseClass + " transition-all duration-300 ease-in-out";
  const [animationClass, setAnimationClass] = useState<string>(animatedClass);

  useEffect(() => {
    setAnimationClass("animation-enter");
    const timer = setTimeout(() => {
      setAnimationClass(animatedClass);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return animationClass;
};

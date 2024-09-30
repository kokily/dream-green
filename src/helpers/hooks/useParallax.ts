import { useEffect } from 'react';
import Parallax from 'parallax-js';

export function useParallax(selector: string) {
  useEffect(() => {
    const element: any = document.querySelector(selector);

    if (element) {
      const parallaxInstance = new Parallax(element, {
        relativeInput: true,
      });

      parallaxInstance.enable();

      return () => {
        element.parallaxInstance.destroy();
      };
    }
  }, [selector]);
}

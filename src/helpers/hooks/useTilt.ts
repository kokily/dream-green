import { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

export function useTilt(selector: string) {
  useEffect(() => {
    const element: any = document.querySelector(selector);

    if (element) {
      VanillaTilt.init(element, {
        speed: 400,
        perspective: 500,
        easing:
          'perspective(500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      });

      return () => {
        element.vanillaTilt.destroy();
      };
    }
  }, [selector]);
}

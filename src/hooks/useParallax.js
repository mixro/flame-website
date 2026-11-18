import { useEffect } from 'react';

/**
 * Gentle scroll parallax for elements with data-parallax="<factor>" (e.g. 0.06).
 * Moves each element by a small fraction of its distance from the viewport centre.
 * Off for users who prefer reduced motion and on small screens.
 */
export function useParallax() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 900px)').matches;
    const els = [...document.querySelectorAll('[data-parallax]')];
    if (reduce || small || !els.length) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const d = r.top + r.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${(-d * Number(el.dataset.parallax)).toFixed(1)}px, 0) scale(1.08)`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

// Product photography. Files live in src/assets/products/ as
// `<kind>-<logo>-<width>.webp` (kind: hoodie | ziphoodie | crewneck | tee | longsleeve | beanie | cap | clutch | crossbody,
// logo: black | white).
// Images are 4:5 cut-outs on a transparent background, so the page backdrop shows through.
const files = import.meta.glob('../assets/products/*.webp', { eager: true, import: 'default' });

const url = (kind, logo, w) => files[`../assets/products/${kind}-${logo}-${w}.webp`];

const LABELS = {
  hoodie: 'hoodie',
  tee: 't-shirt',
  beanie: 'beanie',
  clutch: 'clutch bag',
  ziphoodie: 'zip hoodie',
  crewneck: 'crewneck sweatshirt',
  longsleeve: 'long-sleeve T-shirt',
  cap: 'baseball cap',
  crossbody: 'crossbody bag',
};
const TREATMENT = { black: 'tonal black logo', white: 'visible white logo' };

export default function ProductImage({ kind = 'hoodie', logo = 'black', sizes = '(max-width: 1000px) 50vw, 25vw', priority = false, alt, className = '' }) {
  const v = logo === 'white' ? 'white' : 'black';
  const small = url(kind, v, 600);
  const large = url(kind, v, 1200);
  if (!small || !large) return null;
  return (
    <img
      className={`pimg ${className}`}
      src={small}
      srcSet={`${small} 600w, ${large} 1200w`}
      sizes={sizes}
      width="1200"
      height="1500"
      alt={alt ?? `Black FLAME ${LABELS[kind] || kind} with ${TREATMENT[v]}`}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
      draggable="false"
    />
  );
}

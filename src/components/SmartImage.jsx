import { useState } from 'react';
import { photos } from '../data/images';

const files = import.meta.glob('../assets/campaign/*.webp', { eager: true, import: 'default' });

// All available widths for one photo, smallest first.
function sources(name) {
  return Object.entries(files)
    .map(([path, url]) => {
      const m = path.match(/\/([^/]+)-(\d+)\.webp$/);
      return m && m[1] === name ? { w: Number(m[2]), url } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.w - b.w);
}

/**
 * Responsive, lazy, layout-stable campaign photo.
 * - srcset + sizes so phones never download desktop files
 * - fixed aspect ratio (crop point from `focus`) so nothing shifts while loading
 * - dark placeholder, fades in on load
 */
export default function SmartImage({ name, sizes = '100vw', priority = false, ratio, className = '', alt, focus, shade = false }) {
  const photo = photos[name];
  const [loaded, setLoaded] = useState(false);
  const list = photo ? sources(name) : [];
  if (!photo || !list.length) return null;
  const mid = list[Math.min(1, list.length - 1)];
  return (
    <div className={`smart-img ${loaded ? 'is-loaded' : ''} ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img
        src={mid.url}
        srcSet={list.map((s) => `${s.url} ${s.w}w`).join(', ')}
        sizes={sizes}
        width={mid.w}
        height={ratio ? Math.round(mid.w / ratio) : undefined}
        alt={alt ?? photo.alt}
        style={{ objectPosition: focus || photo.focus }}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
      />
      {shade && <span className="smart-img__shade" aria-hidden="true" />}
    </div>
  );
}

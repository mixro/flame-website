const sizesApparel = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
const oneSize = ['One size'];

export const categories = [
  { id: 'hoodies', label: 'Hoodies', kind: 'hoodie' },
  { id: 'tees', label: 'Tees', kind: 'tee' },
  { id: 'headwear', label: 'Headwear', kind: 'beanie' },
  { id: 'bags', label: 'Bags', kind: 'clutch' },
];

// price: null shows "Price at launch". Put real numbers (TZS) in when known.
// Lines in `details` still written as [BRACKETS] are hidden from customers.
export const products = [
  {
    slug: 'duality-hoodie',
    title: 'Duality Hoodie',
    kind: 'hoodie',
    category: 'hoodies',
    price: null,
    sizes: sizesApparel,
    variants: { black: 'Tonal black', white: 'Visible white logo' },
    description:
      'A hoodie in one deep black. The chest logo is worked tonally, black thread on black cloth, seen when the light moves rather than shouted. Choose the white version when you want it seen.',
    details: [
      'Raised tonal or white chest logo',
      'Red A on the inner neck label',
      'Black drawcords',
      '[FABRIC SPEC AFTER SAMPLING]',
      '[FIT NOTES]',
    ],
  },
  {
    slug: 'ember-zip-hoodie',
    title: 'Ember Zip Hoodie',
    kind: 'ziphoodie',
    category: 'hoodies',
    price: null,
    sizes: sizesApparel,
    variants: { black: 'Tonal black', white: 'Visible white logo' },
    description:
      'The full-zip take on the hoodie. Heavy black fleece, a black zip, and a small FLAME on the left chest, raised in black or printed in white.',
    details: ['Raised tonal or white left-chest logo', 'Full-length black zip', 'Two side pockets', '[FABRIC SPEC AFTER SAMPLING]', '[FIT NOTES]'],
  },
  {
    slug: 'eclipse-crewneck',
    title: 'Eclipse Crewneck',
    kind: 'crewneck',
    category: 'hoodies',
    price: null,
    sizes: sizesApparel,
    variants: { black: 'Tonal black', white: 'Visible white logo' },
    description:
      'A heavyweight black crewneck with the wordmark across the chest. Tonal when you want texture, white when you want it read from across the room.',
    details: ['Raised tonal or white chest logo', 'Ribbed collar, cuffs and hem', '[FABRIC SPEC AFTER SAMPLING]', '[FIT NOTES]'],
  },
  {
    slug: 'core-tee',
    title: 'Core Tee',
    kind: 'tee',
    category: 'tees',
    price: null,
    sizes: sizesApparel,
    variants: { black: 'Tonal black', white: 'Visible white logo' },
    description:
      'The everyday piece. Dense black jersey with a chest logo that is either tonal or white. Built to sit under everything and hold its colour.',
    details: ['Raised tonal or white chest logo', 'White FLAME print inside the neck', '[FABRIC SPEC AFTER SAMPLING]', '[FIT NOTES]'],
  },
  {
    slug: 'core-long-sleeve',
    title: 'Core Long Sleeve',
    kind: 'longsleeve',
    category: 'tees',
    price: null,
    sizes: sizesApparel,
    variants: { black: 'Tonal black', white: 'Visible white logo' },
    description:
      'The Core Tee with full sleeves. Dense black jersey, ribbed cuffs, and the chest logo in tonal black or white.',
    details: ['Raised tonal or white chest logo', 'White FLAME print inside the neck', 'Ribbed cuffs', '[FABRIC SPEC AFTER SAMPLING]', '[FIT NOTES]'],
  },
  {
    slug: 'shadow-beanie',
    title: 'Shadow Beanie',
    kind: 'beanie',
    category: 'headwear',
    price: null,
    sizes: oneSize,
    variants: { black: 'Tonal patch', white: 'Visible patch' },
    description:
      'A ribbed black beanie with a woven FLAME patch on the cuff, tonal for quiet days, white for the ones that should be seen.',
    details: ['Woven logo patch with stitched edge', 'Ribbed knit, folded cuff', '[FABRIC SPEC AFTER SAMPLING]'],
  },
  {
    slug: 'shadow-cap',
    title: 'Shadow Cap',
    kind: 'cap',
    category: 'headwear',
    price: null,
    sizes: oneSize,
    variants: { black: 'Tonal embroidery', white: 'White embroidery' },
    description:
      'A structured six-panel cap in black twill with a raised 3D-embroidered FLAME across the front, in black-on-black or bright white.',
    details: ['Raised 3D embroidery, tonal or white', 'Structured six-panel crown, curved brim', 'Adjustable strap', '[FABRIC SPEC AFTER SAMPLING]'],
  },
  {
    slug: 'voyage-clutch',
    title: 'Voyage Clutch',
    kind: 'clutch',
    category: 'bags',
    price: null,
    sizes: oneSize,
    variants: { black: 'Tonal deboss', white: 'Silver foil logo' },
    description:
      'A structured black clutch in a pebbled finish. The logo is pressed into the front panel: blind for a quiet piece, silver foil to match the hardware.',
    details: ['Debossed or silver-foil logo', 'Zip front pocket and zip main compartment', 'Wrist strap', '[MATERIAL AND DIMENSIONS AFTER SAMPLING]'],
  },
  {
    slug: 'voyage-crossbody',
    title: 'Voyage Crossbody',
    kind: 'crossbody',
    category: 'bags',
    price: null,
    sizes: oneSize,
    variants: { black: 'Tonal deboss', white: 'Silver foil logo' },
    description:
      'The Voyage in a hands-free shape: a compact pebbled-finish bag on an adjustable strap, with the logo pressed in blind or in silver foil.',
    details: ['Debossed or silver-foil logo', 'Zip top and zip front pocket', 'Adjustable shoulder strap', '[MATERIAL AND DIMENSIONS AFTER SAMPLING]'],
  },
];

export const getProduct = (slug) => products.find((p) => p.slug === slug);

// Flat list for the shop grid: every product in both logo variants.
export const catalogue = products.flatMap((p) =>
  ['black', 'white'].map((v) => ({
    key: `${p.slug}:${v}`,
    slug: p.slug,
    logo: v,
    title: p.title,
    kind: p.kind,
    category: p.category,
    variantLabel: p.variants[v],
    price: p.price,
  })),
);

export const formatPrice = (price) =>
  price == null ? 'Price at launch' : `TZS ${new Intl.NumberFormat('en-US').format(price)}`;

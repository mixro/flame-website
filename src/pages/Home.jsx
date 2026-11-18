import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SmartImage from '../components/SmartImage';
import Newsletter from '../components/Newsletter';
import { catalogue, products } from '../data/products';
import { stories } from '../data/journal';
import { useSeo } from '../hooks/useSeo';
import { useReveal } from '../hooks/useReveal';
import { useParallax } from '../hooks/useParallax';
import heroWide1024 from '../assets/hero/campaign-wide-1024.webp';
import heroWide1600 from '../assets/hero/campaign-wide-1600.webp';
import heroWide2560 from '../assets/hero/campaign-wide-2560.webp';
import heroTall720 from '../assets/hero/campaign-tall-720.webp';
import heroTall1080 from '../assets/hero/campaign-tall-1080.webp';
import { instagramLink, isFilled, site } from '../data/site';

// "Swahili · English" label when site.swahili is on, English only otherwise.
const label = (sw, en) => (site.swahili ? `${sw} · ${en}` : en);

const drop = ['duality-hoodie:black', 'core-tee:white', 'shadow-cap:black', 'voyage-crossbody:white']
  .map((k) => catalogue.find((c) => c.key === k))
  .filter(Boolean);

const tiles = [
  { label: 'Hoodies', photo: 'tile-hoodies', to: '/shop?c=hoodies' },
  { label: 'Tees', photo: 'tile-tees', to: '/shop?c=tees' },
  { label: 'Headwear', photo: 'tile-headwear', to: '/shop?c=headwear' },
  { label: 'Bags', photo: 'tile-bags', to: '/shop?c=bags' },
];

const details = [
  { photo: 'detail-print', title: 'Raised, not printed flat', text: 'The wordmark stands off the cloth in black-on-black relief. You find it when the light moves.' },
  { photo: 'detail-patch', title: 'Woven, edge-stitched', text: 'A dense woven label, stitched by hand around the edge, on the cuff of every beanie.' },
  { photo: 'detail-foil', title: 'Pressed into leather', text: 'Blind-debossed or filled with silver foil to match the hardware. Never glued on.' },
];

const gram = ['lookbook-3', 'tile-tees', 'lookbook-2', 'tile-headwear', 'drop-feature', 'tile-bags'];

// Fill these in to show the service strip near the footer. [PLACEHOLDERS] stay hidden.
const trust = [
  ['Delivery', '[DELIVERY WINDOW AND AREAS]'],
  ['Returns', '[RETURN POLICY]'],
  ['Secure payment', '[PAYMENT METHODS]'],
  ['Support', isFilled(site.whatsapp) ? `WhatsApp ${site.whatsapp}` : isFilled(site.email) ? site.email : ''],
].filter(([, t]) => isFilled(t));

export default function Home() {
  useSeo('', 'FLAME is an all-black premium streetwear label from Dar es Salaam, Tanzania. Lit from within.');
  useReveal();
  useParallax();
  const ig = instagramLink();

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <picture className="hero__media">
          <source media="(max-width: 700px)" srcSet={`${heroTall720} 720w, ${heroTall1080} 1080w`} sizes="100vw" />
          <img
            src={heroWide1600}
            srcSet={`${heroWide1024} 1024w, ${heroWide1600} 1600w, ${heroWide2560} 2560w`}
            sizes="100vw"
            alt="Two models in black FLAME hoodies, one holding the Voyage Clutch, the other wearing the Shadow Beanie"
            fetchpriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="hero__title">
            Lit from
            <br />
            <em>within.</em>
          </h1>
          <div className="hero__ctas">
            <Link to="/shop" className="btn btn--hero">Shop the drop</Link>
            <Link to="/shop?c=hoodies" className="btn btn--hero">Shop hoodies</Link>
          </div>
        </div>
        <span className="hero__credit" aria-hidden="true">{site.swahili ? 'Toleo 001' : 'Edition 001'} · Dar es Salaam</span>
        <span className="hero__line" aria-hidden="true" />
      </section>

      {/* 2. Brand statement */}
      <section className="statement">
        <div className="statement__inner reveal">
          <div className="eyebrow eyebrow--light">{label('Toleo 001', 'Edition 001')}</div>
          <p className="statement__line">
            One black, cut for the heat of the coast{' '}
            <br />
            <em>and the cool of the night.</em>
          </p>
          <p className="statement__sub">Designed in Dar es Salaam. Heavy cloth, quiet logos, nothing extra.</p>
        </div>
      </section>

      {/* 3. The drop, editorial */}
      <section className="section section--sand">
        <div className="section__head reveal">
          <div>
            <div className="eyebrow">{label('Mkusanyiko', 'The collection')}</div>
            <h2 className="display">The first drop</h2>
          </div>
          <Link to="/shop" className="link-u">Shop all {products.length} pieces</Link>
        </div>
        <div className="drop reveal">
          <Link to="/product/ember-zip-hoodie?v=white" className="drop__feature">
            <SmartImage name="drop-feature" ratio={4 / 5} focus="50% 30%" sizes="(max-width: 1000px) 100vw, 45vw" />
            <span className="drop__caption">
              <span>Ember Zip Hoodie</span>
              <small>Stone Town, Zanzibar</small>
            </span>
          </Link>
          <div className="drop__grid">
            {drop.map((item) => (
              <ProductCard key={item.key} item={item} logo={item.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lookbook */}
      <section className="lookbook">
        <figure className="lookbook__wide reveal">
          <div className="lookbook__frame lookbook__frame--wide">
            <div className="lookbook__move" data-parallax="0.06">
              <SmartImage name="lookbook-1" sizes="100vw" />
            </div>
          </div>
          <figcaption className="lookbook__cap lookbook__cap--over">
            <span className="eyebrow eyebrow--light">{label('Kitabu cha mtindo', 'Lookbook')}</span>
            <span className="lookbook__title">The sea wall, blue hour.</span>
          </figcaption>
        </figure>
        <div className="lookbook__pair">
          <figure className="reveal">
            <div className="lookbook__frame">
              <div className="lookbook__move" data-parallax="0.05">
                <SmartImage name="lookbook-2" sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
            </div>
            <figcaption className="lookbook__cap">
              <span>Msasani Bay, dawn</span>
              <Link to="/product/core-long-sleeve?v=white" className="link-u link-u--sm">Core Long Sleeve</Link>
            </figcaption>
          </figure>
          <figure className="reveal lookbook__offset">
            <div className="lookbook__frame">
              <div className="lookbook__move" data-parallax="0.1">
                <SmartImage name="lookbook-3" sizes="(max-width: 900px) 100vw, 50vw" />
              </div>
            </div>
            <figcaption className="lookbook__cap">
              <span>Kariakoo rooftops, dusk</span>
              <Link to="/product/shadow-cap?v=white" className="link-u link-u--sm">Shadow Cap</Link>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. Shop by piece */}
      <section className="section section--white">
        <div className="section__head reveal">
          <div>
            <div className="eyebrow">{label('Chagua', 'Explore')}</div>
            <h2 className="display">Shop by piece</h2>
          </div>
        </div>
        <div className="tiles reveal">
          {tiles.map((t) => (
            <Link key={t.label} to={t.to} className="tile tile--photo">
              <SmartImage name={t.photo} sizes="(max-width: 1000px) 50vw, 25vw" />
              <div className="tile__label">
                <span>{t.label}</span>
                <small>Shop →</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. The detail */}
      <section className="section section--sand">
        <div className="section__head section__head--col reveal">
          <div className="eyebrow">{label('Ufundi', 'The detail')}</div>
          <h2 className="display display--lg">
            Made to be <em className="em-dark">touched.</em>
          </h2>
        </div>
        <div className="grid3 reveal">
          {details.map((d) => (
            <div key={d.photo} className="detail">
              <SmartImage name={d.photo} ratio={1} sizes="(max-width: 1000px) 100vw, 33vw" />
              <span className="detail__title">{d.title}</span>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Origin */}
      <section className="origin">
        <div className="origin__media" aria-hidden="true">
          <SmartImage name="origin" sizes="100vw" alt="" />
        </div>
        <div className="origin__copy reveal">
          <span className="origin__coords">6°48′ S · 39°17′ E</span>
          <h2 className="display display--xl">
            Born in
            <br />
            <em>Dar es Salaam.</em>
          </h2>
          <p>A city that runs hot by day and comes alive after dark. FLAME is made for both: heavy black cloth that keeps its shape, and a logo that only shows when the light finds it.</p>
          <Link to="/about" className="btn btn--hero">Our story</Link>
        </div>
      </section>

      {/* 8. Journal */}
      <section className="section section--white">
        <div className="section__head reveal">
          <div>
            <div className="eyebrow">{label('Hadithi', 'The journal')}</div>
            <h2 className="display">Latest stories</h2>
          </div>
          <Link to="/journal" className="link-u">All stories</Link>
        </div>
        <div className="grid3 reveal">
          {stories.map((s) => (
            <Link key={s.slug} to={`/journal/${s.slug}`} className="story">
              <SmartImage name={s.photo} ratio={4 / 3} sizes="(max-width: 900px) 100vw, 33vw" />
              {isFilled(s.date) && <span className="eyebrow">{s.date}</span>}
              <span className="story__title">{s.title}</span>
              <span className="story__excerpt">{s.excerpt}</span>
              <span className="link-u link-u--sm">Read the story</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. Instagram (hidden until site.instagram is set) */}
      {ig && (
        <section className="gram">
          <a href={ig} target="_blank" rel="noopener noreferrer" className="gram__head">
            <span className="eyebrow">Instagram</span>
            <span className="gram__handle">@{site.instagram.replace(/^@/, '')}</span>
          </a>
          <div className="gram__grid">
            {gram.map((p) => (
              <a key={p} href={ig} target="_blank" rel="noopener noreferrer" className="gram__item" aria-label="FLAME on Instagram">
                <SmartImage name={p} ratio={1} sizes="(max-width: 900px) 33vw, 17vw" alt="" />
              </a>
            ))}
          </div>
        </section>
      )}

      {trust.length > 0 && (
        <section className="trust">
          {trust.map(([h, t]) => (
            <div key={h}>
              <span className="eyebrow eyebrow--ink">{h}</span>
              <span>{t}</span>
            </div>
          ))}
        </section>
      )}

      {/* 10. Newsletter */}
      <Newsletter />
    </>
  );
}

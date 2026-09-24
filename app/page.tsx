import Link from 'next/link';
import { restaurant } from '@/data/restaurant';
import { mainMenu } from '@/data/menu';

const highlights = [
  { name: 'Fajitas', blurb: 'Served sizzling with sautéed peppers, onions and all the fixings — chicken, steak, shrimp or Texas-style with all three.', image: '/images/fajitas.webp' },
  { name: 'Molcajete', blurb: 'Steak, shrimp, Spanish sausage and chile toreado in a traditional stone bowl — made for one or to share.', image: '/images/molcajete.webp' },
  { name: 'Tacos de la Casa', blurb: 'Four corn tortillas with steak and chorizo, grilled onions, cilantro, chile toreado and avocado — served with spicy red and green sauces.', image: '/images/tacos.webp' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="script">Family owned &amp; operated</span>
            <h1>El Mariachi</h1>
            <p>
              A warm table, a sizzling plate, and recipes made the way family cooks them.
              Come hungry — we&apos;ll take care of the rest.
            </p>
            <div className="btn-row">
              <Link href="/menu" className="btn btn-primary">View the Menu</Link>
              <a href={restaurant.phoneHref} className="btn btn-light">Call {restaurant.phone}</a>
              <a href={restaurant.mapsHref} target="_blank" rel="noopener" className="btn btn-ghost">Get Directions</a>
            </div>
          </div>
          <div className="hero-art">
            <img src="/images/cover-art.webp" alt="Illustrated mariachi musician on a cobblestone village street, from the El Mariachi menu cover" />
            <span className="hero-badge">¡Bienvenidos!</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">From the kitchen</span>
            <h2>House favorites</h2>
            <p style={{ color: 'var(--text-soft)' }}>
              Straight from the printed menu — the dishes our regulars ask for by name.
            </p>
          </div>
          <div className="card-grid">
            {highlights.map(h => (
              <article className="card" key={h.name} style={{ padding: 0, overflow: 'hidden' }}>
                <img src={h.image} alt={`${h.name} at El Mariachi`} style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: '1.25rem 1.4rem 1.4rem' }}>
                  <h3>{h.name}</h3>
                  <p>{h.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section texture">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The menu</span>
            <h2>One menu, plenty of cravings</h2>
            <p style={{ color: 'var(--parchment)' }}>
              {mainMenu.length} sections, from appetizers and sizzling fajitas to enchiladas,
              birria tacos, seafood and desserts — plus a weekday lunch menu, à la carte
              favorites and kids meals.
            </p>
          </div>
          <div className="btn-row">
            <Link href="/menu" className="btn btn-light">Browse the full menu</Link>
            <Link href="/drinks" className="btn btn-ghost" style={{ color: 'var(--cream)', borderColor: 'rgba(246,239,224,0.4)' }}>Margaritas &amp; drinks</Link>
            <Link href="/menu" className="btn btn-ghost" style={{ color: 'var(--cream)', borderColor: 'rgba(246,239,224,0.4)' }}>Lunch specials · Mon–Fri 11–2</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Plan your visit</span>
            <h2>Find us on Highway 31</h2>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <div className="card">
              <h3>Address</h3>
              <p>{restaurant.address.street}<br />{restaurant.address.city}, {restaurant.address.state} {restaurant.address.zip}</p>
              <a href={restaurant.mapsHref} target="_blank" rel="noopener">Get directions →</a>
            </div>
            <div className="card">
              <h3>Hours</h3>
              <p>
                Monday · 11 AM – 8 PM<br />
                Tuesday – Saturday · 11 AM – 9 PM<br />
                Sunday · Closed
              </p>
              <Link href="/visit">Full details →</Link>
            </div>
            <div className="card">
              <h3>Call us</h3>
              <p>Order ahead, ask about the menu, or just say hello.</p>
              <a href={restaurant.phoneHref}>{restaurant.phone} →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

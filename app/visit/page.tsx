import type { Metadata } from 'next';
import { restaurant } from '@/data/restaurant';

export const metadata: Metadata = {
  title: 'Visit Us',
  description: 'Directions, hours and contact info for El Mariachi — 1675 Hwy 31 N, Prattville, AL. Open Monday–Saturday.',
};

export default function VisitPage() {
  const a = restaurant.address;
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Come on in</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 3.6rem)' }}>Visit El Mariachi</h1>
          <p style={{ color: 'var(--text-soft)' }}>
            We&apos;re right on Highway 31 in Prattville — easy to find, easy to love.
          </p>
        </div>

        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="card">
            <h3>Address</h3>
            <p>{a.street}<br />{a.city}, {a.state} {a.zip}</p>
            <a className="btn btn-primary" href={restaurant.mapsHref} target="_blank" rel="noopener">
              Open in Maps
            </a>
          </div>
          <div className="card">
            <h3>Phone</h3>
            <p>Call for takeout, questions about the menu, or directions.</p>
            <a className="btn btn-primary" href={restaurant.phoneHref}>{restaurant.phone}</a>
          </div>
          <div className="card">
            <h3>Find us on Facebook</h3>
            <p>{restaurant.facebook}</p>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', maxWidth: 560 }}>
          <h2>Hours</h2>
          <table className="hours-table">
            <tbody>
              {restaurant.hours.map(h => (
                <tr key={h.day}>
                  <td>{h.day}</td>
                  <td>{h.closed ? <span className="closed-tag">Closed</span> : `${h.open} – ${h.close}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: '1rem', color: 'var(--text-soft)', fontSize: '0.95rem' }}>
            Lunch menu served {restaurant.lunchHours}.
          </p>
        </div>

        <div className="notice-box" style={{ marginTop: '2.5rem', maxWidth: 640 }}>
          <strong>Good to know.</strong> {restaurant.notices.join(' ')}
        </div>
      </div>
    </section>
  );
}

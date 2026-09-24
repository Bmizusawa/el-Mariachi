import Link from 'next/link';
import { navigation, restaurant } from '@/data/restaurant';
import { asset } from '@/lib/asset';

export default function Footer() {
  const a = restaurant.address;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <img src={asset('/images/mariachi-badge.webp')} alt="" width={52} height={52} />
              <span className="footer-brand">El Mariachi</span>
            </div>
            <p>{restaurant.tagline}. Serving Prattville, Alabama.</p>
          </div>
          <div>
            <h3>Visit</h3>
            <p>
              {a.street}<br />
              {a.city}, {a.state} {a.zip}<br />
              <a href={restaurant.phoneHref}>{restaurant.phone}</a>
            </p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>
              Mon · 11 AM – 8 PM<br />
              Tue – Sat · 11 AM – 9 PM<br />
              Sun · Closed
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <p>
              {navigation.map(n => (
                <span key={n.href}><Link href={n.href}>{n.label}</Link><br /></span>
              ))}
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} El Mariachi, Prattville AL</span>
          <span>{restaurant.notices[2]}</span>
        </div>
      </div>
    </footer>
  );
}

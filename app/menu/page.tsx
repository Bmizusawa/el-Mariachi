import type { Metadata } from 'next';
import MenuExplorer from '@/components/MenuExplorer';
import { menuTabs } from '@/data/menu';
import { restaurant } from '@/data/restaurant';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Browse the full El Mariachi menu — appetizers, fajitas, enchiladas, burritos, seafood, lunch specials, kids meals and more in Prattville, AL.',
};

export default function MenuPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Eat well</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 3.6rem)' }}>The Menu</h1>
          <p style={{ color: 'var(--text-soft)' }}>
            Dinner, weekday lunch, à la carte and kids — all in one place. Search it,
            jump to a section, and call us when you&apos;re ready:{' '}
            <a href={restaurant.phoneHref}>{restaurant.phone}</a>
          </p>
        </div>

        <MenuExplorer tabs={menuTabs} defaultTab="main" />

        <div className="notice-box" style={{ marginTop: '1rem' }}>
          <strong>Good to know.</strong>{' '}
          {restaurant.notices.join(' ')}{' '}
          {restaurant.healthAdvisory}
        </div>
      </div>
    </section>
  );
}

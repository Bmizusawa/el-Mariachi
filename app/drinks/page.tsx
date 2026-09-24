import type { Metadata } from 'next';
import MenuExplorer from '@/components/MenuExplorer';
import { drinkMenu } from '@/data/menu';
import { restaurant } from '@/data/restaurant';

export const metadata: Metadata = {
  title: 'Drinks & Margaritas',
  description: 'Margaritas, daiquiris, wine, bottled beer, mixed drinks and aguas frescas at El Mariachi in Prattville, AL.',
};

const drinkTabs = [{ id: 'drinks', label: 'Drinks & Bar', sections: drinkMenu }] as const;

export default function DrinksPage() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Salud</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 6vw, 3.6rem)' }}>Drinks &amp; Margaritas</h1>
          <p style={{ color: 'var(--text-soft)' }}>
            House margaritas by the glass or pitcher, daiquiris, wine, beer, mixed drinks
            and aguas frescas.
          </p>
        </div>

        <MenuExplorer tabs={drinkTabs} />

        <div className="notice-box" style={{ marginTop: '1rem' }}>
          <strong>Please note.</strong>{' '}
          {restaurant.drinkNotices.join(' ')}
        </div>
      </div>
    </section>
  );
}

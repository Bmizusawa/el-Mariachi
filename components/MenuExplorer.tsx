'use client';
import { useMemo, useState } from 'react';
import MenuItem from './MenuItem';
import type { MenuSection } from '@/data/types';

type Tab = { id: string; label: string; sections: MenuSection[] };

function matches(section: MenuSection, q: string) {
  const items = section.items.filter(it =>
    `${it.itemName} ${it.description} ${it.itemCode}`.toLowerCase().includes(q));
  return items.length ? { ...section, items } : null;
}

export default function MenuExplorer({ tabs, defaultTab }: { tabs: readonly Tab[]; defaultTab?: string }) {
  const [tab, setTab] = useState(defaultTab ?? tabs[0].id);
  const [query, setQuery] = useState('');
  const active = tabs.find(t => t.id === tab) ?? tabs[0];
  const q = query.trim().toLowerCase();
  const sections = useMemo(
    () => (q ? active.sections.map(s => matches(s, q)).filter(Boolean) as MenuSection[] : active.sections),
    [active, q],
  );

  return (
    <div>
      <div className="search-row">
        <input
          className="search-input"
          type="search"
          placeholder="Search the menu — try “enchiladas”, “shrimp”, “margarita”…"
          aria-label="Search menu items"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="menu-tabs" role="tablist" aria-label="Menu sections">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === tab}
            className="menu-tab"
            onClick={() => { setTab(t.id); setQuery(''); }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {!q && (
        <nav className="cat-nav" aria-label="Jump to category">
          {active.sections.map(s => (
            <a key={s.id} href={`#${s.id}`}>{s.name}</a>
          ))}
        </nav>
      )}

      {sections.length === 0 && (
        <p className="no-results">Nothing found for “{query}” — try another craving.</p>
      )}

      {sections.map(section => (
        <section key={section.id} id={section.id} className="menu-section" aria-labelledby={`${section.id}-h`}>
          <div className="menu-section-head">
            <h2 id={`${section.id}-h`}>{section.name}</h2>
            <span className="script" style={{ color: 'var(--terracotta)', fontSize: '1.15rem' }}>
              {section.items.length} item{section.items.length === 1 ? '' : 's'}
            </span>
          </div>
          {section.introduction && <p className="section-intro">{section.introduction}</p>}
          <div className={section.items.length > 8 ? 'menu-cols' : undefined}>
            {section.items.map(it => <MenuItem key={it.id} item={it} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

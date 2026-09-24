'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation, restaurant } from '@/data/restaurant';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-mark-img" src="/images/mariachi-badge.webp" alt="" width={40} height={40} />
          <span>
            <span className="brand-name">El Mariachi</span>
            <span className="brand-sub">family owned &amp; operated</span>
          </span>
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(v => !v)}
        >
          Menu
        </button>
        <nav className={`nav${open ? ' open' : ''}`} id="site-nav" aria-label="Primary">
          {navigation.map(n => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <a href={restaurant.phoneHref} className="nav-cta" onClick={() => setOpen(false)}>
            Call {restaurant.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

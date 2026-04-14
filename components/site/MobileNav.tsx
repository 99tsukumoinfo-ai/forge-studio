'use client';

import { useState } from 'react';

import Link from 'next/link';

type NavItem = { href: string; label: string };

export function MobileNav({ items }: { items: readonly NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="mobile-nav__toggle"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mobile-nav__bar" />
        <span className="mobile-nav__bar" />
        <span className="mobile-nav__bar" />
      </button>

      {isOpen && (
        <div
          className="mobile-nav__backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        >
          <nav
            className="mobile-nav__panel"
            aria-label="モバイルナビゲーション"
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav__link"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

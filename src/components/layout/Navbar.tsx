'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/',           label: 'Accueil' },
  { href: '/a-propos',   label: 'À Propos' },
  { href: '/services',   label: 'Services' },
  { href: '/formations', label: 'Académie' },
  { href: '/portfolio',  label: 'Portfolio' },
  { href: '/blog',       label: 'Blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === '/';
  const isDark  = isHome && !scrolled;

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isDark ? styles.dark : styles.light}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Empire Communications" width={64} height={64} className={styles.logoImg} />
          </Link>

          {/* Desktop nav */}
          <div className={styles.links}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.actions}>
            <Link href="/contact" className={`btn btn-gold btn-sm ${styles.ctaBtn}`}>
              Nous contacter
              <ArrowRight size={14} />
            </Link>
            <button
              className={styles.burger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileInner}>
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.mobileLink} ${pathname === l.href ? styles.mobileLinkActive : ''}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={`btn btn-gold btn-lg ${styles.mobileCta}`}>
            Nous contacter
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

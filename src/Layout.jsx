// src/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link to="/" className="font-medium tracking-tight">
            Sarene Choudhury
          </Link>
          <div className="flex items-center gap-5 text-sm">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/writing" className="hover:underline">Writing</Link>
            <Link to="/code" className="hover:underline">Code</Link>
            <Link to="/film" className="hover:underline">Film</Link>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-3xl px-4 py-10 sm:py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} Sarene Choudhury
        </div>
      </footer>
    </div>
  );
}


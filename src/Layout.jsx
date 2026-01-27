// src/Layout.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/writing", label: "Writing" },
  { to: "/code", label: "Code" },
  { to: "/film", label: "Film" },
];

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "rounded-md px-2 py-1 text-sm transition-colors",
          "hover:text-neutral-900 hover:bg-neutral-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30",
          isActive ? "text-neutral-900 font-medium" : "text-neutral-600",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      {/* Skip link for keyboard users */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      {/* Header / Nav */}
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <nav
          className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3"
          aria-label="Primary"
        >
          <Link
            to="/"
            className="rounded-md text-sm font-semibold tracking-tight text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
          >
            Sarene Choudhury
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main
        id="content"
        className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14"
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sarene Choudhury</p>

          {/* Optional: replace with real links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@sarenechoudhury.com"
              className="rounded-md px-2 py-1 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-2 py-1 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-2 py-1 hover:text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}



// src/Layout.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/writing", label: "Writing" },
  { to: "/code", label: "Code" },
  { to: "/film", label: "Film" },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "inline-flex items-center rounded-full px-3 py-1.5 text-sm transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20",
          isActive
            ? "bg-neutral-900 text-white"
            : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      {/* Skip link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white">
        <div className="mx-auto w-full max-w-4xl px-4">
          <div className="flex items-center justify-between py-4">
            {/* Brand */}
            <div className="min-w-0">
              <Link
                to="/"
                className="block rounded-md text-base font-semibold tracking-tight text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
              >
                Sarene Choudhury
              </Link>
              <p className="mt-0.5 text-xs text-neutral-600">
                Computer Science • Cinema Studies
              </p>
            </div>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} />
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>

          {/* Mobile nav */}
          {open && (
            <nav
              id="mobile-nav"
              className="md:hidden pb-4"
              aria-label="Mobile primary"
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavItem
                    key={item.to}
                    to={item.to}
                    label={item.label}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Content */}
      <main id="content" className="mx-auto w-full max-w-4xl px-4 py-10 sm:py-14">
        {/* subtle page frame */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto w-full max-w-4xl px-4 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-900">Sarene Choudhury</p>
              <p className="mt-1 text-sm text-neutral-600">
                © {new Date().getFullYear()} • All rights reserved
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a
                href="mailto:sareneac@icloud.com"
                className="text-neutral-700 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/sarene-choudhury-a6b6a929b"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-700 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sarenechoudhury"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-700 hover:text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-500"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}




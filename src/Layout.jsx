// src/Layout.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/writing", label: "Writing" },
  { to: "/code", label: "Code" },
  { to: "/film", label: "Film" },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DesktopNavItem({ to, label, index }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cx(
          "group relative flex items-center gap-3 py-2",
          "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/30",
          isActive ? "text-slate-100" : "text-slate-400 hover:text-slate-200"
        )
      }
    >
      {({ isActive }) => (
        <>
          {/* index */}
          <span className="w-10 text-xs font-mono tracking-tight text-emerald-300/70">
            {String(index).padStart(2, "0")}
          </span>

          {/* indicator */}
          <span
            aria-hidden="true"
            className={cx(
              "h-px w-10 transition-all",
              isActive
                ? "w-16 bg-emerald-300/70"
                : "bg-slate-700 group-hover:w-16 group-hover:bg-slate-500"
            )}
          />

          <span className={cx("text-sm tracking-tight", isActive && "font-medium")}>
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}

function MobileNavItem({ to, label, onNavigate }) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        cx(
          "rounded-lg px-3 py-2 text-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/30",
          isActive
            ? "bg-slate-800/80 text-slate-100"
            : "text-slate-200 hover:bg-slate-800/60"
        )
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <div className="min-h-dvh bg-[#0B1220] text-slate-100">
      {/* Background: glow + subtle “grid/noise” vibe */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/12 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* Skip link */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-800 focus:px-3 focus:py-2 focus:text-sm focus:text-slate-100 focus:shadow"
      >
        Skip to content
      </a>

      {/* Mobile header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B1220]/75 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="rounded-md text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/30"
          >
            Sarene Choudhury
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/30"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-white/10">
            <nav aria-label="Mobile primary" className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.to}
                    to={item.to}
                    label={item.label}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
                <a
                  href="mailto:sareneac@icloud.com"
                  className="underline underline-offset-4 decoration-white/20 hover:text-emerald-200 hover:decoration-emerald-300/60"
                >
                  Email
                </a>
                <a
                  href="https://github.com/sarenechoudhury"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-white/20 hover:text-emerald-200 hover:decoration-emerald-300/60"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sarene-choudhury-a6b6a929b"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 decoration-white/20 hover:text-emerald-200 hover:decoration-emerald-300/60"
                >
                  LinkedIn
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Desktop layout */}
      <div className="relative mx-auto w-full max-w-6xl px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sticky identity / nav column */}
          <aside className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-0 flex max-h-dvh flex-col justify-between py-16">
              <div>
                <Link
                  to="/"
                  className="inline-block rounded-md text-3xl font-semibold tracking-tight text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/30"
                >
                  Sarene Choudhury
                </Link>

                <p className="mt-3 text-sm text-slate-300">
                  CS &amp; Cinema Studies @ UChicago
                </p>

                <p className="mt-6 max-w-sm text-sm leading-6 text-slate-300">
                  I build ML + software projects and write about film, narrative, and theory.
                  I like clean systems, strong storytelling, and thoughtful interfaces.
                </p>

                <nav className="mt-10 space-y-1" aria-label="Primary">
                  {navItems.map((item, i) => (
                    <DesktopNavItem
                      key={item.to}
                      index={i + 1}
                      to={item.to}
                      label={item.label}
                    />
                  ))}
                </nav>
              </div>

              <div className="pt-10">
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
                  <a
                    href="mailto:sareneac@icloud.com"
                    className="underline underline-offset-4 decoration-white/20 hover:text-emerald-200 hover:decoration-emerald-300/60"
                  >
                    Email
                  </a>
                  <a
                    href="https://github.com/sarenechoudhury"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 decoration-white/20 hover:text-emerald-200 hover:decoration-emerald-300/60"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarene-choudhury-a6b6a929b"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 decoration-white/20 hover:text-emerald-200 hover:decoration-emerald-300/60"
                  >
                    LinkedIn
                  </a>
                </div>

                <p className="mt-8 text-xs text-slate-500">
                  © {new Date().getFullYear()} Sarene Choudhury
                </p>
              </div>
            </div>
          </aside>

          {/* Main content column */}
          <main id="content" className="lg:col-span-7 py-10 lg:py-16">
            {/* A little “depth” without a box: subtle top divider + spacing */}
            <div className="max-w-2xl">
              <div className="mb-8 h-px w-full bg-white/10" />
              {children}
            </div>

            {/* Mobile-only footer (desktop already has it in sidebar) */}
            <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-slate-400 lg:hidden">
              <p>© {new Date().getFullYear()} Sarene Choudhury</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}








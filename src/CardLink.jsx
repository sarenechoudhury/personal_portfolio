import React from "react";
import { Link } from "react-router-dom";

export default function CardLink({ to, href, children, className = "" }) {
  const classes = `card card-interactive block ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{
        padding: "1.25rem 0",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/logo/Logo_fab_remove.PNG"
            alt="Iron Fabrication Services"
            style={{
              height: "80px",
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
        </Link>

        <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
          <div className="nav-links">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <div className="dropdown">
              <Link
                href="/about"
                style={{ padding: "20px 0" }}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <div className="dropdown-content">
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  Overview
                </Link>
                <Link href="/partners" onClick={() => setIsOpen(false)}>
                  Partners
                </Link>
                <Link href="/careers" onClick={() => setIsOpen(false)}>
                  Careers
                </Link>
              </div>
            </div>

            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/map-directions" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>

          <div className="nav-cta">
            <Link
              href="/map-directions"
              className="btn btn-primary"
              style={{ padding: "0.75rem 1.5rem", fontSize: "0.9rem" }}
              onClick={() => setIsOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <button
          className={`mobile-menu-btn ${isOpen ? "active" : ""}`}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

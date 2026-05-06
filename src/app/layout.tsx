import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Fabrication | Structural Steel",
  description:
    "High-end structural steel and iron fabrication based in Maryland.",
  icons: {
    icon: "/images/logo/Logo_fab_remove.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Navbar />

        <main>{children}</main>

        <footer
          style={{
            background: "var(--color-steel-blue)",
            padding: "5rem 0",
            color: "#FFF",
          }}
        >
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    background: "#FFF",
                    padding: "10px 14px",
                    display: "inline-block",
                    borderRadius: "6px",
                  }}
                >
                  <img
                    src="/images/logo/Logo_fab_remove.PNG"
                    alt="Iron Fabrication Services"
                    style={{
                      height: "60px",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 style={{ marginBottom: "1.5rem", color: "#FFF" }}>Company</h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li>
                  <Link
                    href="/about"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/map-directions"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: "1.5rem", color: "#FFF" }}>Contact</h4>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <li>9010 Junction Dr, Annapolis Junction, MD, 20701</li>
                <li>info@ironfs.com</li>
                <li>410-712-7070</li>
              </ul>
            </div>
          </div>
          <div
            className="container"
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.875rem",
            }}
          >
            <div>
              &copy; {new Date().getFullYear()} Iron Fabrication. All rights
              reserved.
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Link href="/terms">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

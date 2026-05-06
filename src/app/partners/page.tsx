"use client";
import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "Bozzuto", image: "/images/Partners logos/Bozzuto logo.png" },
    { name: "CBG", image: "/images/Partners logos/CBG-Logo.png" },
    { name: "GCS-SIGAL", image: "/images/Partners logos/GCS-SIGAL-Logo.jpg" },
    { name: "Grunley", image: "/images/Partners logos/Grunley-Logo.jpg" },
    { name: "NRP Group", image: "/images/Partners logos/NRP Group-Logo.png" },
    { name: "Iron Fabrication Services, LLC", image: "/images/logo/Logo_fab_remove.PNG" },
    { name: "SIE", image: "/images/Partners logos/SIE cropped Logo.png" },
    { name: "SmootDC", image: "/images/Partners logos/SmootDC-Logo.png" },
  ];

  return (
    <div
      style={{
        paddingTop: "100px",
        minHeight: "100vh",
        background: "transparent",
      }}
    >
      <div className="container section">
        <h1 className="section-title">
          Our <span>Partners</span>
        </h1>

        <div
          style={{
            background: "#FFFFFF",
            padding: "clamp(1.5rem, 5vw, 4rem)",
            border: "1px solid var(--color-border)",
            borderRadius: "4px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "4rem",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  width: "100%",
                  height: "120px",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  style={{ objectFit: "contain", padding: "1rem" }}
                  sizes="(max-width: 768px) 100vw, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

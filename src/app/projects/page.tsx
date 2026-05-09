"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/* ── Project data ────────────────────────────────────────── */
interface Project {
  id: string;
  name: string;
  category: string;
  cover: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: "north-moore",
    name: "North Moore",
    category: "Commercial",
    cover: "/images/project_gallery/CBG Building/222013-North Moore.jpeg",
    images: [
      "/images/project_gallery/CBG Building/222013-North Moore.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore1.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore2.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore3.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore4.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore5.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore1.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore2.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore3.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore4.jpeg",
      "/images/project_gallery/CBG Building/222013-North Moore5.jpeg",
    ],
  },
  {
    id: "crystal-metro-entrance",
    name: "Crystal Metro Entrance",
    category: "Commercial",
    cover:
      "/images/project_gallery/Clark Construction/223011-Crystal Metro Entrance.jpeg",
    images: [
      "/images/project_gallery/Clark Construction/223011-Crystal Metro Entrance.jpeg",
      "/images/project_gallery/Clark Construction/223011-Crystal Metro Entrance.jpeg",
      "/images/project_gallery/Clark Construction/223011-Crystal Metro Entrance2.jpeg",
      "/images/project_gallery/Clark Construction/223011-Crystal Metro Entrance3.jpeg",
      "/images/project_gallery/Clark Construction/223011-Crystal Metro Entrance4.jpeg",
    ],
  },
  {
    id: "mars-arcadia",
    name: "Mars Arcadia",
    category: "Commercial",
    cover:
      "/images/project_gallery/James Davis Construction/224001-Mars Arcadia.jpeg",
    images: [
      "/images/project_gallery/James Davis Construction/224001-Mars Arcadia.jpeg",
      "/images/project_gallery/James Davis Construction/224001-Mars Arcadia1.jpeg",
      "/images/project_gallery/James Davis Construction/224001-Mars Arcadia2.jpeg",
      "/images/project_gallery/James Davis Construction/224001-Mars Arcadia.jpeg",
      "/images/project_gallery/James Davis Construction/224001-Mars Arcadia1.jpeg",
      "/images/project_gallery/James Davis Construction/224001-Mars Arcadia2.jpeg",
    ],
  },
  {
    id: "omvhs",
    name: "Smoot Construction",
    category: "Commercial",
    cover: "/images/project_gallery/Smoot Construction/224002-OMVHS.jpeg",
    images: [
      "/images/project_gallery/Smoot Construction/224002-OMVHS.jpeg",
      "/images/project_gallery/Smoot Construction/224002-OMVHS1.jpeg",
      "/images/project_gallery/Smoot Construction/224002-OMVHS.jpeg",
      "/images/project_gallery/Smoot Construction/224002-OMVHS1.jpeg",
    ],
  },
  {
    id: "u-market",
    name: "U-Market",
    category: "Commercial",
    cover: "/images/project_gallery/NRP Group/224004-U-Market.jpeg",
    images: [
      "/images/project_gallery/NRP Group/224004-U-Market.jpeg",
      "/images/project_gallery/NRP Group/224004-U-Market1.jpeg",
      "/images/project_gallery/NRP Group/224004-U-Market2.jpeg",
      "/images/project_gallery/NRP Group/224004-U-Market3.jpeg",
      "/images/project_gallery/NRP Group/224004-U-Market.jpeg",
      "/images/project_gallery/NRP Group/224004-U-Market1.jpeg",
      "/images/project_gallery/NRP Group/224004-U-Market2.jpeg",
      "/images/project_gallery/NRP Group/224004-U-Market3.jpeg",
    ],
  },
  {
    id: "inova-medical-center",
    name: "Inova Medical Center",
    category: "Commercial",
    cover: "/images/project_gallery/Clark Construction/224006-Inova.jpeg",
    images: [
      "/images/project_gallery/Clark Construction/224006-Inova.jpeg",
      "/images/project_gallery/Clark Construction/224006-Inova1.jpeg",
      "/images/project_gallery/Clark Construction/224006-Inova2.jpeg",
      "/images/project_gallery/Clark Construction/224006-Inova.jpeg",
      "/images/project_gallery/Clark Construction/224006-Inova1.jpeg",
      "/images/project_gallery/Clark Construction/224006-Inova2.jpeg",
    ],
  },
  {
    id: "1250-maryland-ave",
    name: "Maryland Ave",
    category: "Commercial",
    cover:
      "/images/project_gallery/Balfour Beatty/224009-1250 Maryland Ave.jpeg",
    images: [
      "/images/project_gallery/Balfour Beatty/224009-1250 Maryland Ave.jpeg",
      "/images/project_gallery/Balfour Beatty/224009-1250 Maryland Ave1.jpeg",
      "/images/project_gallery/Balfour Beatty/224009-1250 Maryland Ave2.jpeg",
      "/images/project_gallery/Balfour Beatty/224009-1250 Maryland Ave3.jpeg",
      "/images/project_gallery/Balfour Beatty/224009-1250 Maryland Ave4.jpeg",
      "/images/project_gallery/Balfour Beatty/224009-1250 Maryland Ave5.jpeg",
    ],
  },
  {
    id: "malcolm-x-elementary",
    name: "Malcolm X Elementary",
    category: "Commercial",
    cover:
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX.JPG",
    images: [
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX.JPG",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX0.jpeg",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX1.JPG",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX10.jpeg",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX11.jpeg",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX2.JPG",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX3.JPG",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX4.JPG",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX5.jpeg",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX6.jpeg",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX7.jpeg",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX8.jpeg",
      "/images/project_gallery/GCS-Sigal/Malcolm X Elementary School/224010-MalcolmX9.jpeg",
    ],
  },
  {
    id: "templeton-elementary",
    name: "Templeton Elementary",
    category: "Commercial",
    cover:
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton.JPG",
    images: [
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton.JPG",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton1.JPG",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton10.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton11.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton12.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton13.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton2.JPG",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton3.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton4.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton5.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton6.JPG",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton7.JPG",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton8.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-TempIeton9.jpeg",
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-Templeton14.jpeg",
    ],
  },
  {
    id: "224011-temp-ieton",
    name: "Temp Ieton",
    category: "Commercial",
    cover:
      "/images/project_gallery/GCS-Sigal/Templeton Elementary School/224011-Templeton14.jpeg",
    images: [],
  },
  {
    id: "congress-heights-recreation-center",
    name: "Congress Heights Recreation Center",
    category: "Commercial",
    cover:
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress.jpeg",
    images: [
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress0.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress1.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress10.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress2.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress3.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress4.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress5.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress6.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress7.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress8.jpeg",
      "/images/project_gallery/GCS-Sigal/Congress Heights Recreation Center/225006-Congress9.jpeg",
    ],
  },
  {
    id: "stead-park-recreation-center",
    name: "Stead Park Recreation Center",
    category: "Commercial",
    cover:
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park.jpeg",
    images: [
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park0.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park1.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park2.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park3.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park4.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park5.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park6.jpeg",
      "/images/project_gallery/GCS-Sigal/Stead Park Recreation Center/222005-Stead Park7.jpeg",
    ],
  },
  {
    id: "thomas",
    name: "Thomas",
    category: "Commercial",
    cover: "/images/project_gallery/Smoot Construction/224007-Thomas.jpeg",
    images: [
      "/images/project_gallery/Smoot Construction/224007-Thomas.jpeg",
      "/images/project_gallery/Smoot Construction/224007-Thomas2.jpeg",
    ],
  },
];

/* ── Component ───────────────────────────────────────────── */
export default function Projects() {
  const [lightbox, setLightbox] = useState<{
    project: Project;
    index: number;
  } | null>(null);

  /* Open lightbox */
  const open = (project: Project, index = 0) => setLightbox({ project, index });

  /* Close lightbox */
  const close = () => setLightbox(null);

  /* Navigate within the same project */
  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (!lightbox) return;
      const total = lightbox.project.images.length;
      setLightbox({
        ...lightbox,
        index: (lightbox.index + dir + total) % total,
      });
    },
    [lightbox],
  );

  /* Keyboard: ← → Esc */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, navigate]);

  /* Lock body scroll while lightbox is open */
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const current = lightbox ? lightbox.project.images[lightbox.index] : null;

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
          Project <span>Gallery</span>
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--color-text-muted)",
            marginBottom: "3rem",
            maxWidth: "600px",
          }}
        >
          A selection of our recent structural steel, staircase, and railing
          installations. Click any project to explore all photos.
        </p>

        {/* Project grid — one card per project */}
        <div className="masonry-grid" style={{ gridAutoRows: "300px" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="masonry-item"
              style={{ position: "relative", cursor: "pointer" }}
              onClick={() => open(project, 0)}
            >
              <Image
                src={project.cover}
                alt={project.name}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                className="hover-zoom"
                sizes="(max-width: 768px) 100vw, 350px"
              />
              {/* Overlay with name + photo count */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(14,22,38,0.85) 0%, transparent 55%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.25rem",
                }}
              >
                <span
                  style={{
                    color: "var(--color-primary-light)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.15rem",
                    marginTop: "0.25rem",
                  }}
                >
                  {project.name}
                </h3>
                {project.images.length > 1 && (
                  <span
                    style={{
                      marginTop: "0.4rem",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.6)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                    {project.images.length} photos
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ───────────────────────────────────────── */}
      {lightbox && current && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(5, 8, 16, 0.97)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={close}
        >
          {/* Inner panel — stops propagation */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Top bar ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 1.5rem",
                flexShrink: 0,
              }}
            >
              <div>
                <span
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  {lightbox.project.category}
                </span>
                <h2
                  style={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginTop: "0.1rem",
                  }}
                >
                  {lightbox.project.name}
                </h2>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                {/* Counter */}
                <span
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.9rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {lightbox.index + 1} / {lightbox.project.images.length}
                </span>
                {/* Close */}
                <button
                  onClick={close}
                  aria-label="Close lightbox"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "#fff",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    fontSize: "1.4rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.22)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                  }
                >
                  ×
                </button>
              </div>
            </div>

            {/* ── Main image area ── */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              <Image
                key={current}
                src={current}
                alt={`${lightbox.project.name} — photo ${lightbox.index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
                priority
              />

              {/* Prev arrow */}
              {lightbox.project.images.length > 1 && (
                <button
                  onClick={() => navigate(-1)}
                  aria-label="Previous image"
                  style={{
                    position: "absolute",
                    left: "1.25rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.12)",
                    border: "none",
                    color: "#fff",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(6px)",
                    transition: "background 0.2s",
                    zIndex: 5,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(49,82,163,0.7)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.12)")
                  }
                >
                  ‹
                </button>
              )}

              {/* Next arrow */}
              {lightbox.project.images.length > 1 && (
                <button
                  onClick={() => navigate(1)}
                  aria-label="Next image"
                  style={{
                    position: "absolute",
                    right: "1.25rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255,255,255,0.12)",
                    border: "none",
                    color: "#fff",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(6px)",
                    transition: "background 0.2s",
                    zIndex: 5,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(49,82,163,0.7)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.12)")
                  }
                >
                  ›
                </button>
              )}
            </div>

            {/* ── Thumbnail strip ── */}
            {lightbox.project.images.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
                  overflowX: "auto",
                  flexShrink: 0,
                  justifyContent: "center",
                  scrollbarWidth: "thin",
                }}
              >
                {lightbox.project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightbox({ ...lightbox, index: i })}
                    aria-label={`View photo ${i + 1}`}
                    style={{
                      position: "relative",
                      flexShrink: 0,
                      width: "80px",
                      height: "54px",
                      padding: 0,
                      border: "none",
                      borderRadius: "4px",
                      overflow: "hidden",
                      cursor: "pointer",
                      outline:
                        i === lightbox.index
                          ? "2.5px solid #3152A3"
                          : "2.5px solid transparent",
                      opacity: i === lightbox.index ? 1 : 0.5,
                      transition: "opacity 0.2s, outline 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (i !== lightbox.index)
                        e.currentTarget.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      if (i !== lightbox.index)
                        e.currentTarget.style.opacity = "0.5";
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hover zoom */}
      <style
        dangerouslySetInnerHTML={{
          __html: `.hover-zoom:hover { transform: scale(1.05); }`,
        }}
      />
    </div>
  );
}

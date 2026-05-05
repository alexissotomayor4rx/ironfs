import Image from "next/image";
import PanoramaSlider from "@/components/PanoramaSlider";

export default function About() {
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
          About <span>Us</span>
        </h1>

        <div
          style={{
            background: "#FFFFFF",
            padding: "3rem",
            border: "1px solid var(--color-border)",
            borderRadius: "4px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              height: "100%",
              minHeight: "450px",
            }}
          >
            {/* Top Panoramic Slider */}
            <PanoramaSlider
              aspectRatio="16/7"
              images={[
                {
                  src: "/images/project_gallery/224009-1250 Maryland Ave-2.jpeg",
                  alt: "1250 Maryland Ave view 1",
                },
                {
                  src: "/images/project_gallery/224009-1250 Maryland Ave-1.jpeg",
                  alt: "1250 Maryland Ave view 2",
                },
                {
                  src: "/images/project_gallery/224009-1250 Maryland Ave.jpeg",
                  alt: "1250 Maryland Ave view 3",
                },
                {
                  src: "/images/project_gallery/B4DD675F-05CF-4FB9-97D4-8098E75EAF0A.jpeg",
                  alt: "Steel structure",
                },
              ]}
            />
            {/* Bottom Row - 2 Verticals */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                flex: "1.2",
                minHeight: "250px",
              }}
            >
              <div
                className="vision-img-card"
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <Image
                  src="/images/project_gallery/224002-OMVHS.jpeg"
                  alt="Mission Vertical 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="vision-img-card"
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <Image
                  src="/images/project_gallery/222013-North Moore3.jpeg"
                  alt="Mission Vertical 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          <div>
            <h2
              style={{
                fontSize: "2rem",
                color: "var(--color-charcoal)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              Our{" "}
              <span style={{ color: "var(--color-steel-blue)" }}>Mission</span>
            </h2>
            <p
              style={{
                color: "var(--color-charcoal)",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              We are a trusted, leading engineering steel fabrication and supply
              corporation, offering high-quality, cost-effective solutions for
              commercial and residential construction projects in the
              Washington, D.C., Virginia, Maryland, and Pennsylvania
              metropolitan areas. Our commitment goes beyond steel: we
              collaborate with our customers to provide tailored solutions that
              ensure structural integrity, efficiency, and lasting value.
            </p>
            <p
              style={{
                color: "var(--color-charcoal)",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              With a reputation for reliability, we combine expert engineering,
              craftsmanship with hands-on, project management to meet the unique
              needs of every building. From skyscrapers to community spaces, our
              steel is the foundation of progress, strengthening not only
              structures but also the partnerships that make them possible.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div
          style={{
            marginTop: "5rem",
            background: "#FFFFFF",
            padding: "3rem",
            borderTop: "4px solid var(--color-steel-blue)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            borderRadius: "4px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "2rem",
                color: "var(--color-charcoal)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              Our{" "}
              <span style={{ color: "var(--color-steel-blue)" }}>Vision</span>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "1.8",
                fontSize: "1.05rem",
                marginBottom: "1rem",
              }}
            >
              We build more than structures: we build a legacy. We will be the
              brand that general contractors trust when they need steel
              solutions that push the boundaries without compromising safety or
              sustainability to shape the iconic structures of tomorrow. We
              won’t just build; we will innovate, where every beam tells a story
              of precision, every connection reflects decades of engineering and
              fabrication experience, and every project raises the bar for
              responsible construction.
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              It's not about being the biggest, but the best. We will be the
              partner that not only adapts to industry changes but drives them.
              Where complex projects succeed because we master the art of
              anticipating challenges before they arise. And where our
              commitment to people—our employees, partners, and communities—is
              reflected in everything we do. This is how we will transform steel
              from a building material into a catalyst for better, smarter
              building construction projects.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              height: "100%",
              minHeight: "450px",
            }}
          >
            {/* Top Panoramic */}
            <div
              className="vision-img-card"
              style={{
                position: "relative",
                flex: "1",
                minHeight: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            >
              <Image
                src="/images/project_gallery/224009-1250 Maryland Ave-2.jpeg"
                alt="Vision Panoramic"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Bottom Row - 2 Verticals */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                flex: "1.2",
                minHeight: "250px",
              }}
            >
              <div
                className="vision-img-card"
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <Image
                  src="/images/project_gallery/222013-North Moore1.jpeg"
                  alt="Vision Vertical 1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="vision-img-card"
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <Image
                  src="/images/project_gallery/224010-Malcolm.JPG"
                  alt="Vision Vertical 2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Goals Section */}
        <div style={{ marginTop: "6rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "var(--color-charcoal)",
                textTransform: "uppercase",
              }}
            >
              Strategic{" "}
              <span style={{ color: "var(--color-primary)" }}>Goals</span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                background: "var(--color-primary)",
                margin: "1rem auto 0",
              }}
            ></div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "3rem",
            }}
          >
            {/* Goal 1 */}
            <div
              className="goal-circle"
              style={{
                background: "#FFFFFF",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2.5rem",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                border: "4px solid transparent",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--color-steel-blue)",
                  marginBottom: "1rem",
                  transition: "color 0.3s ease",
                }}
                className="goal-title"
              >
                Operational Excellence
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                To continuously invest in cutting-edge fabrication technology,
                enhancing precision and reducing project lead times for our
                clients.
              </p>
            </div>
            {/* Goal 2 */}
            <div
              className="goal-circle"
              style={{
                background: "#FFFFFF",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2.5rem",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                border: "4px solid transparent",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--color-steel-blue)",
                  marginBottom: "1rem",
                  transition: "color 0.3s ease",
                }}
                className="goal-title"
              >
                Zero-Incident Safety
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Maintain an uncompromising commitment to safety by enforcing
                rigorous OSHA protocols so every team member returns home
                safely.
              </p>
            </div>
            {/* Goal 3 */}
            <div
              className="goal-circle"
              style={{
                background: "#FFFFFF",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2.5rem",
                transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                border: "4px solid transparent",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--color-steel-blue)",
                  marginBottom: "1rem",
                  transition: "color 0.3s ease",
                }}
                className="goal-title"
              >
                Regional Expansion
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                  margin: 0,
                }}
              >
                Solidify our footprint as the premier structural steel partner
                in the Mid-Atlantic by scaling our engineering capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div style={{ marginTop: "6rem", marginBottom: "2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "var(--color-charcoal)",
                textTransform: "uppercase",
              }}
            >
              Core <span style={{ color: "var(--color-primary)" }}>Values</span>
            </h2>
            <div
              style={{
                width: "60px",
                height: "4px",
                background: "var(--color-primary)",
                margin: "1rem auto 0",
              }}
            ></div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                borderLeft: "4px solid var(--color-primary)",
                borderRadius: "0 8px 8px 0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="value-card"
            >
              <h3
                style={{
                  color: "var(--color-steel-blue)",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                Comprehensive Development
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                We promote the personal and professional growth of our
                employees, fostering a work environment that values purpose,
                balance, and well-being.
              </p>
            </div>

            <div
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                borderLeft: "4px solid var(--color-primary)",
                borderRadius: "0 8px 8px 0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="value-card"
            >
              <h3
                style={{
                  color: "var(--color-steel-blue)",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                Sustainable Excellence
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                We strive for efficiency in every project, minimizing waste,
                optimizing resources, and contributing to more sustainable
                construction practices.
              </p>
            </div>

            <div
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                borderLeft: "4px solid var(--color-primary)",
                borderRadius: "0 8px 8px 0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="value-card"
            >
              <h3
                style={{
                  color: "var(--color-steel-blue)",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                Integrity & Collaboration
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                We act with honesty and transparency in all our relationships,
                working as a team with clients and partners to achieve mutual
                success.
              </p>
            </div>

            <div
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                borderLeft: "4px solid var(--color-steel-blue)",
                borderRadius: "0 8px 8px 0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="value-card"
            >
              <h3
                style={{
                  color: "var(--color-primary)",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                Impact & Legacy
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                We focus on participating in projects that contribute to the
                development of meaningful and lasting infrastructure, leaving a
                positive legacy in the communities we serve.
              </p>
            </div>

            <div
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                borderLeft: "4px solid var(--color-steel-blue)",
                borderRadius: "0 8px 8px 0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="value-card"
            >
              <h3
                style={{
                  color: "var(--color-primary)",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                Technical Innovation
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                We constantly seek new ways to improve our processes and
                adopting cutting-edge technologies to optimize efficiency and
                safety.
              </p>
            </div>

            <div
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                borderLeft: "4px solid var(--color-steel-blue)",
                borderRadius: "0 8px 8px 0",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="value-card"
            >
              <h3
                style={{
                  color: "var(--color-primary)",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                Responsibility & Ethics
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                We act with integrity, transparency, and accountability in all
                our operations, complying with the highest ethical and legal
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .goal-circle:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
          border-color: var(--color-primary) !important;
        }
        .goal-circle:hover .goal-title {
          color: var(--color-primary) !important;
        }
        .value-card:hover {
          transform: translateX(8px);
          box-shadow: -5px 5px 15px rgba(0,0,0,0.05) !important;
        }
        .vision-img-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          z-index: 10;
        }
      `,
        }}
      />
    </div>
  );
}

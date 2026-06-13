// ============================================================
// BordaFamily — Catálogo principal
// Componente principal con hero, servicios, productos,
// portafolio, contacto y footer.
// ============================================================

import { useState, useCallback, useEffect, useRef } from "react";
import {
  Menu, X, MessageCircle, ShieldCheck,
  Sparkles, ArrowRight, Star, Camera, Zap, Layers,
  Heart, Phone, Mail, MapPin, Globe, Hash, Video,
  ArrowUp, Truck, CheckCircle2,
} from "lucide-react";

// Datos externos (products, catalogoFotos, stats, services)
import { products, catalogoFotos, stats, services } from "../data/inicioData";

// Estilos
import "../css/Inicio.css";

// ============================================================
// Componente principal
// ============================================================
export default function Catalogo() {
  // Estado local
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);

  // Animación inicial del hero
  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fallback para imágenes rotas
  const handleImgError = useCallback((e) => {
    e.currentTarget.src = `${import.meta.env.BASE_URL}bordafamili.png`;
  }, []);

  // Scroll suave a una sección por ID
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ============================================================
  // Render
  // ============================================================
  return (
    <main style={{ fontFamily: "'Outfit', sans-serif", background: "#0b1425", color: "#f0ece4", overflowX: "hidden", minHeight: "100vh" }}>

      <style>{`
        /* ============================================================
           RESPONSIVE MOBILE — solo corrige distribución en celular.
           En escritorio se mantiene igual.
           ============================================================ */

        @media (min-width: 769px) and (max-height: 860px) {
          .hero-text-block {
            margin-top: 64px !important;
          }

          .hero-h1 {
            font-size: clamp(38px, 4vw, 54px) !important;
            line-height: 1.01 !important;
          }

          .hero-text-block p {
            margin-top: 8px !important;
            font-size: 13.5px !important;
            line-height: 1.42 !important;
          }

          .hero-product-panel > div {
            width: 560px !important;
            padding: 11px !important;
          }

          .hero-mini-photo {
            height: 132px !important;
          }

          .hero-cta {
            margin-top: 16px !important;
          }
        }

        @media (max-width: 768px) {

          .show-mobile {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .hidden-mobile {
            display: none !important;
          }
          .hero-section {
            min-height: auto !important;
            padding-top: 76px !important;
            padding-bottom: 56px !important;
          }

          .hero-bg-img {
            object-position: center left !important;
          }

          .hero-content {
            padding: 0 16px 56px !important;
            max-width: 100% !important;
          }

          .marquee-wrap {
            top: 88px !important;
            left: 0 !important;
            right: 0 !important;
            opacity: 0.25 !important;
          }

          .hero-layout {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            align-items: center !important;
            gap: 22px !important;
          }

          .hero-text-block {
            width: 100% !important;
            max-width: 100% !important;
            margin-left: 0 !important;
            margin-top: 42px !important;
            margin-bottom: 8px !important;
            padding: 0 4px !important;
            text-align: center !important;
            transform: none !important;
          }

          .hero-text-block > div:first-child {
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 12px !important;
            padding: 6px 10px !important;
            max-width: calc(100vw - 36px) !important;
          }

          .hero-text-block > div:first-child span {
            font-size: 9px !important;
            letter-spacing: 0.14em !important;
            white-space: nowrap !important;
          }

          .hero-h1 {
            font-size: clamp(38px, 13vw, 54px) !important;
            line-height: 0.98 !important;
            max-width: 100% !important;
            text-align: center !important;
          }

          .hero-text-block p {
            max-width: 92% !important;
            margin: 14px auto 0 !important;
            font-size: 14px !important;
            line-height: 1.55 !important;
            text-align: center !important;
          }

          .hero-product-panel {
            width: 100% !important;
            margin-left: 0 !important;
          }

          .hero-product-panel > div {
            width: 100% !important;
            max-width: calc(100vw - 32px) !important;
            padding: 10px !important;
            border-radius: 14px !important;
          }

          .hero-mini-photo {
            height: clamp(88px, 27vw, 125px) !important;
            border-radius: 10px !important;
          }

          .hero-cta {
            width: 100% !important;
            justify-content: center !important;
            gap: 12px !important;
            margin-top: 22px !important;
          }

          .hero-cta .btn-gold,
          .hero-cta .btn-outline {
            min-width: 150px !important;
            justify-content: center !important;
            padding: 12px 18px !important;
            font-size: 12px !important;
          }
        }

        @media (max-width: 420px) {
          .hero-text-block {
            margin-top: 34px !important;
          }

          .hero-h1 {
            font-size: clamp(34px, 12vw, 46px) !important;
          }

          .hero-product-panel > div {
            max-width: calc(100vw - 24px) !important;
          }

          .hero-mini-photo {
            height: clamp(76px, 26vw, 105px) !important;
          }

          .hero-cta {
            flex-direction: column !important;
            align-items: center !important;
          }

          .hero-cta .btn-gold,
          .hero-cta .btn-outline {
            width: min(260px, 90vw) !important;
          }
        }
      `}</style>


      {/* ======================================================
          NAVBAR  (fija, vidrio esmerilado)
          ====================================================== */}
      <nav className={`nav-glass ${scrolled ? "nav-scrolled" : ""}`}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 28px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button onClick={() => scrollTo("hero")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(56,189,248,0.3)", flexShrink: 0 }}>
              <img src={`${import.meta.env.BASE_URL}bordafamili.png`} alt="BordaFamily" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: "#f0ece4", letterSpacing: "0.08em" }}>
              BORDA<span style={{ color: "var(--gold)" }}>FAMILY</span>
            </span>
          </button>

          {/* Navegación de escritorio */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="hidden-mobile">
            {[["productos", "Servicios"], ["catalogo", "Catálogo"], ["contacto", "Contacto"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--stone-light)", fontSize: 13, fontWeight: 400, letterSpacing: "0.06em", padding: "8px 18px", transition: "color 0.3s" }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "var(--stone-light)"}>
                {label}
              </button>
            ))}
            <div style={{ width: 1, height: 20, background: "rgba(56,189,248,0.2)", margin: "0 12px" }} />
            <a href="https://wa.me/50585291916" target="_blank" rel="noopener noreferrer"
              className="btn-gold" style={{ padding: "10px 22px", borderRadius: 4, textDecoration: "none" }}>
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </div>

          {/* Botón hamburguesa (móvil) */}
          <button onClick={() => setMenuOpen(true)}
            style={{ background: "none", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 4, padding: "8px 10px", cursor: "pointer", color: "var(--cream)", display: "none" }}
            className="show-mobile">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* ======================================================
          MENÚ MÓVIL  (panel lateral fullscreen)
          ====================================================== */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: 24, right: 24, background: "none", border: "none", cursor: "pointer", color: "var(--cream)" }}>
          <X size={24} />
        </button>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: "var(--gold)", letterSpacing: "0.1em", marginBottom: 24 }}>
          BORDAFAMILY
        </div>
        {[["hero", "Catálogo"], ["productos", "Servicios"], ["catalogo", "Portafolio"], ["contacto", "Contacto"]].map(([id, label]) => (
          <button key={id} onClick={() => scrollTo(id)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--cream)", fontSize: 28, fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, letterSpacing: "0.05em" }}>
            {label}
          </button>
        ))}
        <a href="https://wa.me/50585291916" target="_blank" rel="noopener noreferrer"
          className="btn-gold" style={{ marginTop: 16, padding: "14px 32px", borderRadius: 4, textDecoration: "none", fontSize: 14 }}>
          <MessageCircle size={16} /> Cotizar ahora
        </a>
      </div>

      {/* ======================================================
          HERO SECTION
          ====================================================== */}
      <section id="hero" className="hero-section" style={{ position: "relative", minHeight: "100vh", display: "flex", paddingBottom: 0, overflow: "hidden" }}>

        {/* Capas de fondo con overlays */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={`${import.meta.env.BASE_URL}imagen%20de%20fondo.jpg`} alt=""
            className="hero-img-zoom hero-bg-img"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div className="hero-overlay-dark" style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(11,20,37,0.5) 0%, rgba(37,99,160,0.3) 50%, rgba(11,20,37,0.4) 100%)" }} />
          <div className="hero-overlay-top" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,20,37,0.5) 0%, transparent 60%)" }} />
          <div className="hero-overlay-blue" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(59,130,246,0.15) 0%, transparent 30%, transparent 70%, rgba(59,130,246,0.1) 100%)" }} />
          <div className="hero-overlay-radial" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)" }} />
        </div>

        {/* Brillo ambiental azul */}
        <div style={{ position: "absolute", bottom: "20%", left: "10%", width: "60%", height: "40%", background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Contenido del hero */}
        <div className="hero-content" style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 28px 80px", width: "100%" }}>

          {/* Marquee de palabras clave */}
          <div className="marquee-wrap" style={{ position: "absolute", top: "clamp(70px, 12vh, 110px)", left: 28, right: 28, overflow: "hidden", opacity: 0.5 }}>
            <div className="marquee-track" style={{ fontSize: 10, letterSpacing: "0.25em", color: "var(--gold)", fontWeight: 500 }}>
              {["BORDADOS", "DTF", "SUBLIMACIÓN", "CAMISAS", "TAZAS", "TERMOS", "UNIFORMES", "PIJAMAS", "TOALLAS", "ESTAMPADOS", "BORDADOS", "DTF", "SUBLIMACIÓN", "CAMISAS", "TAZAS", "TERMOS", "UNIFORMES", "PIJAMAS", "TOALLAS", "ESTAMPADOS"].map((t, i) => (
                <span key={i} style={{ padding: "0 28px", opacity: i % 2 === 0 ? 1 : 0.5 }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="hero-layout" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16, maxWidth: 660, marginLeft: "auto", marginRight: "24px" }}>

            {/* Texto principal (arriba de las imágenes) */}
            <div
              className={`reveal-up ${heroVisible ? "visible" : ""} hero-text-block`}
              style={{
                transitionDelay: "0.2s",
                textAlign: "left",

                // Ajuste SOLO del texto en PC:
                // aprovecha mejor el espacio entre la manga y el panel.
                // No mueve imágenes ni botones.
                marginLeft: -64,
                marginTop: 72,
                marginBottom: 4,
                transform: "none",

                width: 680,
                maxWidth: "680px",
                position: "relative",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 10,
                  width: "fit-content",
                  background: "rgba(11,20,37,0.68)",
                  border: "1px solid rgba(56,189,248,0.4)",
                  borderRadius: 6,
                  padding: "6px 13px 6px 10px",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.22)",
                }}
              >
                <div style={{ width: 22, height: 1, background: "var(--gold)" }} />
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.24em",
                    color: "var(--gold)",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    textShadow: "0 2px 12px rgba(0,0,0,.45)",
                  }}
                >
                  LEÓN, NICARAGUA · DESDE 2022
                </span>
              </div>

              <h1
                className="hero-h1 serif"
                style={{
                  margin: 0,
                  fontSize: "clamp(40px, 4.25vw, 58px)",
                  fontWeight: 400,
                  lineHeight: 1.02,
                  color: "var(--cream)",
                  letterSpacing: "0.018em",
                  maxWidth: 680,
                  textShadow: "0 8px 30px rgba(0,0,0,0.35)",
                }}
              >
                Personalización{" "}
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
                  profesional
                </span>
                <br />
                para tu marca
              </h1>

              <p
                style={{
                  marginTop: 10,
                  maxWidth: 610,
                  fontSize: 14,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.92)",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  textShadow: "0 4px 18px rgba(0,0,0,0.42)",
                }}
              >
                Termos, camisetas, tazas, bordados y productos personalizados con
                acabado limpio, moderno y duradero.
              </p>
            </div>

            {/* Panel de imágenes */}
            <div className={`reveal-up visible hero-product-panel`}
              style={{
                transitionDelay: "0.5s",
                marginLeft: "70px",
              }}>
              <div style={{
                background: "linear-gradient(145deg, rgba(15,31,61,0.96), rgba(22,45,90,0.94))",
                border: "1px solid rgba(56,189,248,0.48)",
                borderRadius: 16,
                padding: 12,
                width: 590,
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(22px)",
                boxShadow: "0 32px 90px rgba(0,0,0,0.55), 0 0 0 1px rgba(56,189,248,0.14), 0 0 58px rgba(56,189,248,0.16), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, transparent, #38bdf8, #bae6fd, #38bdf8, transparent)",
                }} />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: "radial-gradient(circle at 20% 10%, rgba(56,189,248,0.12), transparent 38%), radial-gradient(circle at 90% 80%, rgba(56,189,248,0.08), transparent 34%)",
                }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                  {[
                    ...catalogoFotos.slice(0, 3).map(img => ({ src: `${import.meta.env.BASE_URL}catalogo/${encodeURIComponent(img)}` })),
                    { src: `${import.meta.env.BASE_URL}producto%20que%20realizamos/${encodeURIComponent("tasas.jpeg")}` },
                    { src: `${import.meta.env.BASE_URL}producto%20que%20realizamos/${encodeURIComponent("pigamas.jpeg")}` },
                    { src: `${import.meta.env.BASE_URL}producto%20que%20realizamos/${encodeURIComponent("Bordados.jpeg")}` },
                  ].map((item, i) => (
                    <div key={i} className="hero-mini-photo" style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      height: 145,
                      background: "#0a1428",
                      border: "1px solid rgba(56,189,248,0.28)",
                      boxShadow: "0 18px 42px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}>
                      <img
                        src={item.src}
                        alt=""
                        onError={handleImgError}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          filter: "contrast(1.08) saturate(1.1)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: "1px solid rgba(56,189,248,0.22)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.16em", color: "#7dd3fc", fontWeight: 800 }}>TRABAJOS RECIENTES</span>
                  <span style={{ fontSize: 8, color: "rgba(203,213,225,0.8)", fontWeight: 500 }}>+{catalogoFotos.length}</span>
                </div>
              </div>

              {/* Botones debajo de las imágenes */}
              <div className="hero-cta" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 20 }}>
                <button onClick={() => scrollTo("catalogo")} className="btn-gold" style={{ padding: "13px 24px", borderRadius: 4, fontSize: 13, letterSpacing: "0.06em" }}>
                  Ver catálogo <ArrowRight size={15} />
                </button>
                <a href="https://wa.me/50585291916" target="_blank" rel="noopener noreferrer"
                  className="btn-outline" style={{ padding: "13px 24px", borderRadius: 4, textDecoration: "none" }}>
                  <MessageCircle size={15} /> Cotizar pedido
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Degradado inferior */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to bottom, transparent, rgba(11,20,55,0.7) 40%, var(--ink))" }} />
      </section>

      {/* ======================================================
          STRIP DE SERVICIOS
          ====================================================== */}
      <section style={{ background: "var(--ink)", borderTop: "1px solid rgba(56,189,248,0.1)", borderBottom: "1px solid rgba(56,189,248,0.1)", padding: "40px 28px" }}>
        <div className="services-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
          {services.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, border: "1px solid rgba(56,189,248,0.25)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <s.icon size={20} color="var(--gold)" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--cream)", letterSpacing: "0.03em" }}>{s.name}</div>
                <div style={{ width: 24, height: 1, background: "var(--gold)", marginTop: 6, opacity: 0.5 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          PRODUCTOS  (grilla de servicios)
          ====================================================== */}
      <section id="productos" style={{ background: "var(--ink)", padding: "100px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="products-header" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--gold)", marginBottom: 16, fontWeight: 500 }}>
                NUESTROS SERVICIOS
              </div>
              <h2 className="serif section-title" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1 }}>
                Todo lo que necesitas<br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>para personalizar</span>
              </h2>
            </div>
            <button onClick={() => scrollTo("contacto")} className="btn-outline" style={{ padding: "12px 24px", borderRadius: 4, whiteSpace: "nowrap" }}>
              Cotizar ahora <ArrowRight size={15} />
            </button>
          </div>

          <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
            {products.map((p, i) => (
              <div key={i} className="product-card" style={{ borderRadius: 2 }}
                onMouseEnter={() => setActiveProduct(i)}
                onMouseLeave={() => setActiveProduct(null)}>
                <div className="img-wrap" style={{ height: 270 }}>
                  <img src={`${import.meta.env.BASE_URL}producto%20que%20realizamos/${encodeURIComponent(p.img)}`}
                    alt={p.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                  {p.tag && <div className="overlay-tag">{p.tag}</div>}
                  <div style={{ position: "absolute", bottom: 16, left: 16, width: 36, height: 36, background: "rgba(10,10,10,0.8)", border: "1px solid rgba(56,189,248,0.3)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)" }}>
                    <p.icon size={16} color="var(--gold)" />
                  </div>
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--cream)", letterSpacing: "0.02em", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(218,226,240,0.86)", lineHeight: 1.65, fontWeight: 400 }}>{p.desc}</p>
                  <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 8, color: "var(--gold)", fontSize: 12, letterSpacing: "0.08em", fontWeight: 500, opacity: activeProduct === i ? 1 : 0, transition: "opacity 0.3s" }}>
                    Ver detalles <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          ESTADÍSTICAS
          ====================================================== */}
      <section style={{ background: "var(--ink-mid)", borderTop: "1px solid rgba(56,189,248,0.08)", borderBottom: "1px solid rgba(56,189,248,0.08)", padding: "72px 28px" }}>
        <div className="stats-grid" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ position: "relative" }}>
              {i > 0 && <div className="stats-divider hidden-mobile" style={{ position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)", width: 1, height: 40, background: "rgba(56,189,248,0.15)" }} />}
              <div className="serif" style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--stone-light)", marginTop: 10, fontWeight: 400 }}>{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          CATÁLOGO  (masonry)
          ====================================================== */}
      <section id="catalogo" style={{ background: "var(--ink)", padding: "100px 28px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="catalog-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "flex-end", marginBottom: 64, gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--gold)", marginBottom: 16, fontWeight: 500 }}>
                PORTAFOLIO
              </div>
              <h2 className="serif section-title" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1 }}>
                Trabajos
                <br /><span style={{ fontStyle: "italic", color: "var(--gold)" }}>recientes</span>
              </h2>
            </div>
            <p style={{ fontSize: 16, color: "rgba(218,226,240,0.82)", lineHeight: 1.9, fontWeight: 400, alignSelf: "flex-end" }}>
              Cada pieza que creamos lleva el compromiso de la más alta calidad, con atención cuidadosa a cada detalle para superar las expectativas de nuestros clientes.
            </p>
          </div>

          <div className="catalog-masonry" style={{ columns: "3 260px", gap: 14 }}>
            {catalogoFotos.map((img, i) => (
              <div key={i} className="catalog-item" style={{ marginBottom: 14, breakInside: "avoid", borderRadius: 12, border: "1px solid rgba(56,189,248,0.05)" }}>
                <a href={`${import.meta.env.BASE_URL}catalogo/${encodeURIComponent(img)}`} target="_blank" rel="noopener noreferrer">
                  <img src={`${import.meta.env.BASE_URL}catalogo/${encodeURIComponent(img)}`}
                    alt={`Producto ${i + 1}`} loading="lazy" onError={handleImgError} />
                  <div className="cap">
                    <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--gold)", fontWeight: 500 }}>VER PRODUCTO →</span>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <button onClick={() => scrollTo("contacto")} className="btn-outline" style={{ padding: "14px 36px", borderRadius: 4, fontSize: 13 }}>
              Solicitar catálogo completo <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================
          TESTIMONIO
          ====================================================== */}
      <section style={{ background: "var(--ink-mid)", padding: "80px 28px", textAlign: "center", borderTop: "1px solid rgba(56,189,248,0.08)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--gold)" color="var(--gold)" />)}
          </div>
          <blockquote className="serif" style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, fontStyle: "italic", color: "var(--cream)", lineHeight: 1.6, letterSpacing: "0.01em" }}>
            "Acabados limpios, colores vivos y atención personalizada. BordaFamily superó todas nuestras expectativas para los uniformes de nuestro equipo."
          </blockquote>
          <div style={{ marginTop: 24, fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", fontWeight: 500 }}>
            — CLIENTE VERIFICADO · 128+ RESEÑAS POSITIVAS
          </div>
        </div>
      </section>

      {/* ======================================================
          CONTACTO
          ====================================================== */}
      <section className="contact-section" id="contacto" style={{ background: "var(--ink)", padding: "100px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(56,189,248,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -40, right: -40, width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(56,189,248,0.08)", pointerEvents: "none" }} />

        <div className="contact-layout" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 120, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--gold)", marginBottom: 16, fontWeight: 500 }}>
              CONTACTO
            </div>
            <h2 className="serif section-title" style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1, marginBottom: 24 }}>
              ¿Listo para hacer<br />
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>tu pedido?</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--stone-light)", lineHeight: 1.8, fontWeight: 300, marginBottom: 44 }}>
              Escríbenos por WhatsApp y cuéntanos qué producto quieres personalizar. Respondemos rápido con cotizaciones sin compromiso.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: Phone, text: "+505 8529 1916" },
                { icon: Mail, text: "info@bordafamily.com" },
                { icon: MapPin, text: "León, Nicaragua" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 36, height: 36, border: "1px solid rgba(56,189,248,0.2)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <item.icon size={15} color="var(--gold)" />
                  </div>
                  <span style={{ fontSize: 14, color: "var(--stone-light)", fontWeight: 300 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-card" style={{ background: "var(--ink-mid)", border: "1px solid rgba(56,189,248,0.12)", borderRadius: 8, padding: "48px 44px" }}>
            <div style={{ marginBottom: 32 }}>
              <div className="serif" style={{ fontSize: 26, fontWeight: 300, color: "var(--cream)", marginBottom: 8 }}>Solicita tu cotización</div>
              <div style={{ width: 40, height: 1, background: "var(--gold)" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                [ShieldCheck, "Calidad garantizada en cada pedido"],
                [Sparkles, "Diseños únicos y personalizados"],
                [Truck, "Entrega rápida y coordinada"],
                [CheckCircle2, "Atención directa y profesional"],
              ].map(([Icon, text], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Icon size={16} color="var(--gold)" />
                  <span style={{ fontSize: 14, color: "var(--stone-light)", fontWeight: 300 }}>{text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="https://wa.me/50585291916" target="_blank" rel="noopener noreferrer"
                className="btn-gold" style={{ padding: "16px 24px", borderRadius: 4, justifyContent: "center", textDecoration: "none", fontSize: 14, letterSpacing: "0.05em" }}>
                <MessageCircle size={18} /> Chatear por WhatsApp
              </a>
              <a href="tel:+50585291916"
                className="btn-outline" style={{ padding: "16px 24px", borderRadius: 4, justifyContent: "center", textDecoration: "none", fontSize: 14 }}>
                <Phone size={16} /> Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
          ====================================================== */}
      <footer style={{ background: "var(--ink-mid)", borderTop: "1px solid rgba(56,189,248,0.1)", padding: "56px 28px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div className="footer-brand">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: 6, overflow: "hidden", border: "1px solid rgba(56,189,248,0.25)" }}>
                  <img src={`${import.meta.env.BASE_URL}bordafamili.png`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <span className="serif" style={{ fontSize: 17, fontWeight: 600, color: "var(--cream)", letterSpacing: "0.08em" }}>
                  BORDA<span style={{ color: "var(--gold)" }}>FAMILY</span>
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--stone)", lineHeight: 1.8, fontWeight: 300, maxWidth: 260 }}>
                Personalización profesional con los más altos estándares de calidad en Nicaragua.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
                {[Globe, Hash, Video, Camera].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: 34, height: 34, border: "1px solid rgba(56,189,248,0.15)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", transition: "border-color 0.3s", textDecoration: "none" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--gold)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(56,189,248,0.15)"}>
                    <Icon size={14} color="var(--stone-light)" />
                  </a>
                ))}
              </div>
            </div>

            {[
              ["Navegación", [["hero", "Catálogo"], ["productos", "Servicios"], ["catalogo", "Portafolio"], ["contacto", "Contacto"]]],
              ["Contacto", [[null, "+505 8529 1916"], [null, "info@bordafamily.com"], [null, "León, Nicaragua"]]],
              ["Horario", [[null, "Lun–Vie: 9am–6pm"], [null, "Sábados: 9am–1pm"], [null, "Domingos: Cerrado"]]],
            ].map(([title, items]) => (
              <div key={title}>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--gold)", marginBottom: 20, fontWeight: 600 }}>{title.toUpperCase()}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {items.map(([id, label], j) => (
                    id ? (
                      <button key={j} onClick={() => scrollTo(id)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--stone)", fontSize: 13, textAlign: "left", fontWeight: 300, transition: "color 0.3s", padding: 0 }}
                        onMouseEnter={e => e.target.style.color = "var(--cream)"}
                        onMouseLeave={e => e.target.style.color = "var(--stone)"}>{label}</button>
                    ) : (
                      <span key={j} style={{ color: "var(--stone)", fontSize: 13, fontWeight: 300 }}>{label}</span>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(56,189,248,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "var(--stone)", fontWeight: 300 }}>
              © {new Date().getFullYear()} BordaFamily. Todos los derechos reservados.
            </span>
            <span style={{ fontSize: 11, letterSpacing: "0.15em", color: "rgba(56,189,248,0.4)" }}>NICARAGUA</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a href="https://wa.me/50585291916" target="_blank" rel="noopener noreferrer" className="wa-float">
        <MessageCircle size={24} color="white" />
      </a>

    </main>
  );
}

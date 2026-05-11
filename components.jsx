// 도도웹 — shared atoms (forked from DRAFT.X)
const { useState, useEffect, useRef, useMemo } = React;

function DodoWordmark({ size = 240, style = {} }) {
  return (
    <span style={{
      fontFamily: "Anta, sans-serif",
      fontSize: size,
      lineHeight: 0.9,
      letterSpacing: "0.0003em",
      color: "#fff",
      mixBlendMode: "difference",
      display: "inline-block",
      whiteSpace: "nowrap",
      ...style,
    }}>DODOWEB.</span>
  );
}

function EyebrowRule({ left, right }) {
  return (
    <div style={{
      width: "100%",
      borderBottom: "1px solid rgba(166,166,166,0.2)",
      paddingBottom: 16,
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "DM Sans, sans-serif",
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.85)",
    }}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

function BraceTag({ children, accent = false, size = 13, accentColor = "#8CFF2E" }) {
  return (
    <span style={{
      fontFamily: "Inter, sans-serif",
      fontSize: size,
      letterSpacing: "0.01em",
      color: accent ? accentColor : "#fff",
      whiteSpace: "nowrap",
    }}>
      <span style={{ color: "rgba(166,166,166,0.8)" }}>{"{ "}</span>
      {children}
      <span style={{ color: "rgba(166,166,166,0.8)" }}>{" }"}</span>
    </span>
  );
}

function CapsuleButton({ children, onClick, fill = false, dark = false }) {
  const [hover, setHover] = useState(false);
  const filled = fill || hover;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        padding: "12px 26px",
        border: `1.5px solid ${dark ? "#000" : "#fff"}`,
        borderRadius: 259,
        background: filled ? (dark ? "#000" : "#fff") : "transparent",
        color: filled ? (dark ? "#fff" : "#000") : (dark ? "#000" : "#fff"),
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        transition: "background 360ms cubic-bezier(0.65,0,0.35,1), color 360ms cubic-bezier(0.65,0,0.35,1), transform 200ms ease-out",
      }}
      onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.96)"}
      onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
    >{children}</button>
  );
}

function AccordionItem({ q, kr, defaultOpen = false, body, n }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        position: "relative",
        background: "#121212",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 24,
        padding: "26px 28px",
        cursor: "pointer",
        transition: "border-color 240ms ease-out, background 240ms ease-out",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 22, flex: 1, minWidth: 0 }}>
          {n && <span style={{
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13,
            color: "rgba(166,166,166,0.7)", letterSpacing: "0.06em",
            flex: "0 0 auto",
          }}>({n})</span>}
          <span style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 17,
            color: "#fff",
            letterSpacing: "-0.011em",
            fontWeight: 400,
          }}>{q}</span>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: 100,
          background: "rgba(255,255,255,0.08)",
          position: "relative", flexShrink: 0,
        }}>
          <div style={{ position: "absolute", left: "50%", top: "50%", width: 13, height: 1, background: "#fff", transform: "translate(-50%,-50%)" }} />
          <div style={{
            position: "absolute", left: "50%", top: "50%", width: 1, height: 13, background: "#fff",
            transform: `translate(-50%,-50%) ${open ? "scaleY(0)" : "scaleY(1)"}`,
            transition: "transform 240ms ease-out",
          }} />
        </div>
      </div>
      <div style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 360ms cubic-bezier(0.65,0,0.35,1)",
      }}>
        <div style={{ overflow: "hidden" }}>
          <div style={{
            paddingTop: 22, paddingLeft: n ? 56 : 0,
            color: "#A6A6A6", fontFamily: "Inter, sans-serif",
            fontWeight: 300, fontSize: 15, lineHeight: 1.6, letterSpacing: "-0.003em",
            whiteSpace: "pre-line",
          }}>
            {kr && <div style={{ color: "#fff", marginBottom: 8, fontWeight: 400 }}>{kr}</div>}
            {body}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ tag, title, kr, body, n, accentColor = "#8CFF2E" }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        flex: 1,
        minWidth: 280,
        border: `1px solid ${hover ? "rgba(255,255,255,0.4)" : "rgba(166,166,166,0.2)"}`,
        borderRadius: 18,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 80,
        minHeight: 380,
        background: hover ? "rgba(255,255,255,0.02)" : "transparent",
        transition: "border-color 360ms cubic-bezier(0.65,0,0.35,1), background 360ms cubic-bezier(0.65,0,0.35,1)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <BraceTag accent accentColor={accentColor}>{tag}</BraceTag>
        <span style={{
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 12,
          color: "rgba(166,166,166,0.6)", letterSpacing: "0.08em",
        }}>({n})</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: "auto" }}>
        <div style={{
          fontFamily: "DM Sans, sans-serif",
          fontWeight: 500, fontSize: 36,
          letterSpacing: "-0.03em",
          color: "#fff", lineHeight: 1.0,
        }}>{title}</div>
        <div style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 15, color: "#A6A6A6",
          fontWeight: 300, letterSpacing: "-0.003em",
          lineHeight: 1.5,
        }}>{kr}</div>
        <div style={{
          marginTop: 12,
          paddingTop: 16,
          borderTop: "1px solid rgba(166,166,166,0.15)",
          fontFamily: "Inter, sans-serif",
          fontSize: 13.5, color: "#BBBBBB",
          fontWeight: 300, letterSpacing: "-0.003em",
          lineHeight: 1.55,
        }}>{body}</div>
      </div>
    </div>
  );
}

function WorkCard({ tag, title, kr, image, year, category }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        flex: 1, minWidth: 0,
        display: "flex", flexDirection: "column",
        gap: 20, cursor: "pointer",
      }}
    >
      <div style={{
        height: 420, borderRadius: 10, overflow: "hidden",
        background: `#121212 url(${image}) center / cover no-repeat`,
        position: "relative",
        transform: hover ? "scale(0.985)" : "scale(1)",
        transition: "transform 600ms cubic-bezier(0.65,0,0.35,1)",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45))",
        }} />
        <div style={{
          position: "absolute", left: 22, bottom: 22,
          display: "flex", gap: 10, alignItems: "center",
        }}>
          <span style={{
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 11,
            color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase",
            border: "1px solid rgba(255,255,255,0.4)", padding: "6px 12px", borderRadius: 100,
            backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.2)",
          }}>{category}</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
          <BraceTag size={12}>{tag}</BraceTag>
          <div style={{
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 26,
            letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1,
          }}>{title}</div>
          <div style={{
            fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 14,
            color: "#A6A6A6", letterSpacing: "-0.003em",
          }}>{kr}</div>
        </div>
        <span style={{
          fontFamily: "DM Sans, sans-serif", fontWeight: 400, fontSize: 14,
          color: "rgba(166,166,166,0.6)", letterSpacing: "0.04em", flex: "0 0 auto",
        }}>{year}</span>
      </div>
    </div>
  );
}

function ProcessRow({ n, title, kr, body, accentColor = "#8CFF2E" }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "120px 1fr 1.4fr",
      alignItems: "start",
      gap: 40,
      padding: "44px 12px",
      borderTop: "1px solid rgba(166,166,166,0.2)",
    }}>
      <span style={{
        fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14,
        color: accentColor, letterSpacing: "0.08em",
      }}>(STEP — {n})</span>
      <div>
        <div style={{
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 38,
          letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.0,
        }}>{title}</div>
        <div style={{
          marginTop: 10,
          fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 14,
          color: "#A6A6A6", letterSpacing: "-0.003em",
        }}>{kr}</div>
      </div>
      <div style={{
        fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 16,
        lineHeight: 1.6, color: "#BBBBBB", letterSpacing: "-0.005em",
        maxWidth: 540,
      }}>{body}</div>
    </div>
  );
}

function MetricBlock({ value, label, kr, accentColor = "#8CFF2E", useAccent = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{
        fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 96,
        lineHeight: 0.9, letterSpacing: "-0.04em",
        color: useAccent ? accentColor : "#fff",
      }}>{value}</div>
      <div style={{
        fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13,
        textTransform: "uppercase", letterSpacing: "0.08em",
        color: "#fff",
      }}>{label}</div>
      <div style={{
        fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 14,
        color: "#A6A6A6", letterSpacing: "-0.003em",
      }}>{kr}</div>
    </div>
  );
}

function NavBar({ accentColor = "#8CFF2E" }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "22px 40px",
      mixBlendMode: "difference",
      pointerEvents: "none",
    }}>
      <div style={{
        fontFamily: "Anta, sans-serif", fontSize: 22,
        color: "#fff", letterSpacing: "0.01em",
        pointerEvents: "auto",
      }}>DODOWEB.</div>
      <div style={{
        display: "flex", gap: 36, alignItems: "center",
        pointerEvents: "auto",
      }}>
        {["Works", "Services", "Process", "About", "Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13,
            color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase",
            textDecoration: "none",
          }}>{l}</a>
        ))}
        <span style={{
          width: 8, height: 8, borderRadius: "50%", background: accentColor,
          boxShadow: `0 0 12px ${accentColor}`,
        }} />
      </div>
    </nav>
  );
}

Object.assign(window, {
  DodoWordmark, EyebrowRule, BraceTag, CapsuleButton,
  AccordionItem, ServiceCard, WorkCard, ProcessRow, MetricBlock, NavBar,
});

// 도도웹 — section blocks

function Hero({ accentColor }) {
  return (
    <section data-screen-label="01 Hero" style={{
      position: "relative", padding: "180px 60px 120px",
      display: "flex", flexDirection: "column", gap: 80,
      minHeight: "100vh", boxSizing: "border-box",
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        gap: 40, paddingTop: 40,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <BraceTag accent accentColor={accentColor}>Seoul · Remote · Since 2014</BraceTag>
          <div style={{
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 14,
            color: "#A6A6A6", letterSpacing: "0.04em", textTransform: "uppercase",
          }}>An independent web studio</div>
        </div>
        <div style={{ maxWidth: 380, textAlign: "right" }}>
          <div style={{
            fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 14,
            color: "#A6A6A6", lineHeight: 1.6, letterSpacing: "-0.003em",
          }}>브랜드의 본질을 흔들림 없이 디자인합니다. 도도웹은 12년 동안 70개 이상의 브랜드와 디지털 경험을 만들어왔습니다.</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 40 }}>
        <div style={{ width: "100%", textAlign: "left", overflow: "hidden" }}>
          <DodoWordmark size="clamp(80px, 17vw, 280px)" style={{ display: "block", whiteSpace: "nowrap" }} />
        </div>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        gap: 40, paddingBottom: 20,
      }}>
        <div style={{ maxWidth: 540 }}>
          <h2 style={{
            margin: 0,
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 38,
            lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff",
          }}>Quietly built websites that <em style={{ fontStyle: "italic", fontWeight: 400, color: "#A6A6A6" }}>outlast trends.</em></h2>
          <p style={{
            margin: "20px 0 0", color: "#A6A6A6", fontFamily: "Inter, sans-serif",
            fontWeight: 300, fontSize: 15, lineHeight: 1.6, letterSpacing: "-0.003em",
          }}>유행을 좇지 않고, 오래 살아남을 웹을 만듭니다. 한 줄의 카피, 한 픽셀의 여백까지 직접 설계하는 작은 스튜디오입니다.</p>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <CapsuleButton onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}>View Works</CapsuleButton>
          <CapsuleButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Start a Project</CapsuleButton>
        </div>
      </div>

      <div style={{
        position: "absolute", left: 60, bottom: 40,
        display: "flex", gap: 8, alignItems: "center",
        fontFamily: "DM Sans, sans-serif", fontSize: 11,
        color: "rgba(166,166,166,0.6)", letterSpacing: "0.12em", textTransform: "uppercase",
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%", background: accentColor,
          animation: "dodoPulse 2s ease-in-out infinite",
        }} />
        Currently accepting Q1 · Q2 — 2026
      </div>
    </section>
  );
}

function Marquee({ accentColor }) {
  const items = ["FUNCTIONAL CLARITY", "·", "MEASURED MOTION", "·", "EDITORIAL CRAFT", "·", "BRAND-FIRST WEB", "·", "QUIET PRECISION", "·"];
  const row = [...items, ...items, ...items];
  return (
    <section style={{
      borderTop: "1px solid rgba(166,166,166,0.2)",
      borderBottom: "1px solid rgba(166,166,166,0.2)",
      padding: "32px 0", overflow: "hidden",
    }}>
      <div style={{
        display: "flex", gap: 48, whiteSpace: "nowrap",
        animation: "dodoMarquee 50s linear infinite",
        fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 22,
        letterSpacing: "0.02em", color: "#fff",
      }}>
        {row.map((it, i) => (
          <span key={i} style={{ color: it === "·" ? accentColor : "#fff" }}>{it}</span>
        ))}
      </div>
    </section>
  );
}

function Services({ accentColor }) {
  return (
    <section id="services" data-screen-label="02 Services" style={{ padding: "160px 60px 120px", display: "flex", flexDirection: "column", gap: 70 }}>
      <EyebrowRule left="(WHAT WE DO — 04)" right="STUDIO SERVICES" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 60 }}>
        <h2 style={{
          margin: 0, maxWidth: 900,
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 78,
          lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff",
        }}>Four ways we shape your brand on the web.</h2>
        <p style={{
          margin: 0, maxWidth: 360, color: "#A6A6A6",
          fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 15,
          lineHeight: 1.6, letterSpacing: "-0.003em",
        }}>전략부터 빌드, 운영까지. 작은 팀이 처음부터 끝까지 책임집니다.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        <ServiceCard
          n="01" tag="Brand Web" accentColor={accentColor}
          title="Brand Site" kr="브랜드 사이트"
          body="브랜드의 톤과 결을 그대로 옮긴 풀세트 웹사이트. 카피·아트디렉션·인터랙션 일괄 설계."
        />
        <ServiceCard
          n="02" tag="Commerce" accentColor={accentColor}
          title="Commerce" kr="이커머스 빌드"
          body="Shopify, 카페24, 자체 헤드리스 — 채널과 운영 동선까지 함께 설계하는 셀링 플랫폼."
        />
        <ServiceCard
          n="03" tag="Content" accentColor={accentColor}
          title="Editorial" kr="에디토리얼 시스템"
          body="잡지처럼 읽히는 콘텐츠 시스템. 매거진·룩북·아카이브 사이트의 타입과 그리드 설계."
        />
        <ServiceCard
          n="04" tag="Care" accentColor={accentColor}
          title="Operations" kr="장기 운영 파트너십"
          body="런칭 이후가 진짜 시작. 분기별 개선, 콘텐츠 업데이트, 성능 모니터링까지 동행."
        />
      </div>
    </section>
  );
}

function Works({ accentColor }) {
  return (
    <section id="works" data-screen-label="03 Works" style={{ padding: "160px 60px 120px", display: "flex", flexDirection: "column", gap: 70 }}>
      <EyebrowRule left="(SELECTED WORKS — 06)" right="2022 — 2026" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 60, mixBlendMode: "exclusion" }}>
        <h2 style={{
          margin: 0, maxWidth: 1100,
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 78,
          lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff",
        }}>Selected works, unhurried.</h2>
        <CapsuleButton>All Projects</CapsuleButton>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, rowGap: 80 }}>
        <WorkCard
          tag="Furniture brand" category="Brand · Commerce" year="2025"
          title="GUIDISHO" kr="가이디쇼 — 가구 브랜드 사이트"
          image="assets/work-guidisho.jpg"
        />
        <WorkCard
          tag="Editorial feature" category="Retail Design" year="2024"
          title="VOGUE × AESOP" kr="보그 이솝 — 리테일 디자인 편집"
          image="assets/work-vogue.jpg"
        />
        <WorkCard
          tag="Specialty coffee" category="Brand · Packaging" year="2024"
          title="FRITZ" kr="프릳츠 — 브랜드 패키지 리뉴얼"
          image="assets/work-fritz.jpg"
        />
        <WorkCard
          tag="Global sportswear" category="Site Renewal" year="2025"
          title="ADIDAS" kr="아디다스 — 사이트 리뉴얼"
          image="assets/work-adidas.webp"
        />
      </div>
    </section>
  );
}

function Process({ accentColor }) {
  return (
    <section id="process" data-screen-label="04 Process" style={{ padding: "160px 60px 60px", display: "flex", flexDirection: "column", gap: 70 }}>
      <EyebrowRule left="(HOW WE WORK — 04)" right="PROCESS" />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 60 }}>
        <h2 style={{
          margin: 0, maxWidth: 900,
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 78,
          lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff", whiteSpace: "pre-line",
        }}>{"A small team,\na deliberate cadence."}</h2>
        <p style={{
          margin: 0, maxWidth: 360, color: "#A6A6A6",
          fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 15,
          lineHeight: 1.6, letterSpacing: "-0.003em",
        }}>평균 8~14주, 4단계로 만듭니다. 회의는 적게, 결정은 명확하게.</p>
      </div>
      <div style={{ marginTop: 20 }}>
        <ProcessRow
          n="01" accentColor={accentColor}
          title="Discover" kr="발견 · 1~2주"
          body="인터뷰, 시장 리서치, 경쟁 환경. 브랜드가 가진 진짜 자산과, 웹에서 풀어야 할 단 하나의 과제를 정의합니다."
        />
        <ProcessRow
          n="02" accentColor={accentColor}
          title="Define" kr="정의 · 2~3주"
          body="와이어프레임이 아닌 '편집안'. 사이트맵·카피·아트디렉션을 한 묶음의 문서로 결정합니다."
        />
        <ProcessRow
          n="03" accentColor={accentColor}
          title="Design & Build" kr="디자인 + 빌드 · 4~7주"
          body="디자인과 코드가 같은 팀에서 동시 진행. Figma → React/Webflow → CMS까지 분리되지 않습니다."
        />
        <ProcessRow
          n="04" accentColor={accentColor}
          title="Launch & Care" kr="런칭 + 운영 · 지속"
          body="런칭은 끝이 아니라 첫 측정점. 분기별 점검과 콘텐츠 업데이트로 사이트의 수명을 늘립니다."
        />
        <div style={{ borderTop: "1px solid rgba(166,166,166,0.2)" }} />
      </div>
    </section>
  );
}

function About({ accentColor }) {
  return (
    <section id="about" data-screen-label="05 About" style={{ padding: "160px 60px 120px", display: "flex", flexDirection: "column", gap: 80 }}>
      <EyebrowRule left="(STUDIO — DODOWEB)" right="CORE PHILOSOPHY" />
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 100, alignItems: "start" }}>
        <h2 style={{
          margin: 0, mixBlendMode: "difference",
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 56,
          lineHeight: 1.15, letterSpacing: "-0.025em", color: "#fff",
        }}>
          We design quiet websites — measured typography, restrained motion, and craft you can feel after the page loads. Built by hand, kept simple, made to last.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 36, paddingTop: 12 }}>
          <p style={{
            margin: 0, color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 17,
            lineHeight: 1.6, letterSpacing: "-0.011em",
          }}>도도웹은 4명의 작은 스튜디오입니다. 모든 프로젝트는 시니어 디자이너와 개발자가 처음부터 끝까지 함께 합니다. 동시에 진행하는 프로젝트는 최대 3개. 그래서 모든 결정에 시간이 들어갑니다.</p>
          <p style={{
            margin: 0, color: "#A6A6A6", fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 15,
            lineHeight: 1.6, letterSpacing: "-0.003em",
          }}>빠르게 만드는 곳은 많습니다. 우리는 오래 가는 것을 만듭니다.</p>
          <div style={{ display: "flex", gap: 14 }}>
            <CapsuleButton>About Studio</CapsuleButton>
          </div>
        </div>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 60,
        marginTop: 60, paddingTop: 80, borderTop: "1px solid rgba(166,166,166,0.2)",
      }}>
        <MetricBlock value="12" label="Years" kr="2014년부터 운영 중" />
        <MetricBlock value="74" label="Projects" kr="런칭한 사이트" useAccent accentColor={accentColor} />
        <MetricBlock value="4" label="People" kr="모두 시니어로 구성" />
        <MetricBlock value="93%" label="Repeat Rate" kr="재의뢰·연장 비율" />
      </div>
    </section>
  );
}

function Faq({ accentColor }) {
  return (
    <section style={{ padding: "120px 60px 120px", display: "flex", gap: 80 }}>
      <div style={{ flex: "0 0 380px" }}>
        <BraceTag accent accentColor={accentColor}>Frequently asked</BraceTag>
        <h2 style={{
          margin: "20px 0 16px",
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 64,
          lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff",
          mixBlendMode: "exclusion", whiteSpace: "pre-line",
        }}>{"Before\nyou ask."}</h2>
        <p style={{
          margin: 0, color: "#A6A6A6", fontFamily: "Inter, sans-serif", fontWeight: 300,
          fontSize: 15, lineHeight: 1.6, letterSpacing: "-0.003em",
        }}>도도웹과의 협업, 자주 묻는 질문들.</p>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <AccordionItem
          n="01" defaultOpen
          q="프로젝트 예산은 어느 정도인가요?"
          kr="평균 4,000만원부터, 풀스케일 브랜드 사이트는 1억원 안팎"
          body={"규모와 운영 범위에 따라 달라집니다. 견적은 첫 미팅 후 1주일 내에 항목별로 드립니다.\n\n· 단일 페이지 / 캠페인 — 1,500만원 ~\n· 브랜드 사이트 — 4,000만원 ~\n· 커머스 풀스케일 — 8,000만원 ~"}
        />
        <AccordionItem
          n="02"
          q="얼마나 걸리나요?"
          kr="평균 8~14주"
          body="프로젝트 규모와 의사결정 속도에 따라 다르지만, 대부분 두 달 반에서 석 달 반 사이에 런칭합니다."
        />
        <AccordionItem
          n="03"
          q="기존 디자인 시스템이 없어도 되나요?"
          kr="네, 함께 정의합니다"
          body="브랜드 가이드가 없거나 오래된 경우, 웹 프로젝트와 함께 디지털 디자인 시스템을 함께 만듭니다."
        />
        <AccordionItem
          n="04"
          q="운영은 어떻게 진행되나요?"
          kr="월 단위 케어 패키지 또는 분기별 점검"
          body="런칭 후 한 달은 무상 케어. 이후 월간 운영 계약 또는 분기별 점검 중 선택할 수 있습니다."
        />
        <AccordionItem
          n="05"
          q="어떤 산업 경험이 많나요?"
          kr="뷰티, 패션, 호스피탈리티, 건축, 갤러리"
          body="감각적 카테고리의 브랜드와 가장 많이 작업해왔습니다. 다만 산업보다 '브랜드의 결'이 맞는지를 더 중요하게 봅니다."
        />
      </div>
    </section>
  );
}

function Contact({ accentColor }) {
  return (
    <section id="contact" data-screen-label="06 Contact" style={{
      padding: "160px 60px 80px",
      display: "flex", flexDirection: "column", gap: 80,
      borderTop: "1px solid rgba(166,166,166,0.2)",
    }}>
      <EyebrowRule left="(START — 01)" right="GET IN TOUCH" />

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 100, alignItems: "end" }}>
        <h2 style={{
          margin: 0,
          fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "clamp(80px, 11vw, 180px)",
          lineHeight: 0.9, letterSpacing: "-0.04em", color: "#fff", whiteSpace: "pre-line",
          mixBlendMode: "difference",
        }}>{"Let's\nbuild it."}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 30, paddingBottom: 24 }}>
          <p style={{
            margin: 0, color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 17,
            lineHeight: 1.5, letterSpacing: "-0.011em",
          }}>새 프로젝트, 리뉴얼, 또는 단순 상담 — 어떤 형태든 환영합니다. 첫 답장은 영업일 기준 24시간 이내.</p>
          <BraceTag accent accentColor={accentColor} size={20}>hello@dodoweb.kr</BraceTag>
          <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
            <CapsuleButton>Send brief</CapsuleButton>
            <CapsuleButton>Schedule a call</CapsuleButton>
          </div>
        </div>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40,
        paddingTop: 60, borderTop: "1px solid rgba(166,166,166,0.2)",
      }}>
        {[
          { l: "Studio", k: "스튜디오", v: ["서울 성동구 성수이로 22길", "Seoul · Remote"] },
          { l: "Email", k: "이메일", v: ["hello@dodoweb.kr", "press@dodoweb.kr"] },
          { l: "Hours", k: "운영", v: ["Mon — Fri  10:00 — 19:00 KST", "주말·공휴일 휴무"] },
          { l: "Social", k: "소셜", v: ["Instagram @dodoweb.studio", "Behance / dodoweb"] },
        ].map((c) => (
          <div key={c.l} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{
              fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: 13,
              color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase",
            }}>{c.l} <span style={{ color: "#A6A6A6", marginLeft: 8 }}>{c.k}</span></div>
            {c.v.map((line, i) => (
              <div key={i} style={{
                fontFamily: "Inter, sans-serif", fontWeight: 300, fontSize: 14,
                color: "#A6A6A6", letterSpacing: "-0.003em",
              }}>{line}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ accentColor }) {
  return (
    <section data-screen-label="07 Footer" style={{
      padding: "60px 60px 40px", display: "flex", flexDirection: "column", gap: 60,
      borderTop: "1px solid rgba(166,166,166,0.2)",
    }}>
      <div style={{ width: "100%", textAlign: "left", overflow: "hidden" }}>
        <DodoWordmark size="clamp(80px, 17vw, 280px)" style={{ display: "block", whiteSpace: "nowrap" }} />
      </div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        gap: 40, paddingTop: 30, borderTop: "1px solid rgba(166,166,166,0.2)",
      }}>
        <div style={{
          fontFamily: "DM Sans, sans-serif", fontSize: 13,
          color: "rgba(166,166,166,0.6)", letterSpacing: "0.06em",
        }}>© 2026 DODOWEB STUDIO. All rights reserved · 사업자등록번호 128-12-83472</div>
        <div style={{
          fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: 13,
          color: "#fff", letterSpacing: "-0.003em",
        }}>Defining the essence, designing the quiet web.</div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Marquee, Services, Works, Process, About, Faq, Contact, Footer });

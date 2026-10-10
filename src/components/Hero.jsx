const codeLines = [
  { w: "60%", c: "#B79CFF" },
  { w: "80%", c: "#5AA9FF", x: "14px" },
  { w: "45%", c: "#3DD598", x: "14px" },
  { w: "70%", c: "#FFC531", x: "28px" },
  { w: "35%", c: "#FF6B4A", x: "14px" },
  { w: "50%", c: "#B79CFF" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-head">
        <div className="hero-intro">
          <h1>
            <span className="hi">
              Hi, I'm Mo<span className="wave" aria-hidden="true">👋🏾</span>
            </span>
            <span className="sub">
              a programme leader who builds websites, tools and AI automations with React, Node.js and n8n.
              Here are some of the things I have whipped up.
            </span>
          </h1>
          <svg className="scribble" viewBox="0 0 420 30" aria-hidden="true">
            <path d="M4 20 C 80 6, 150 28, 220 14 S 360 6, 416 18" fill="none" stroke="#FF6B4A" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
        <figure className="portrait">
          <img src="/assets/mo.jpg" alt="Modupe Phillips" width="720" height="900" />
          <figcaption className="portrait-tag">Lagos · open to remote</figcaption>
        </figure>
      </div>

      <div className="hero-cards">
        <figure className="hcard c1">
          <div className="hc-art art-web" aria-hidden="true">
            <div className="code">
              {codeLines.map((l, i) => (
                <i key={i} style={{ "--w": l.w, "--c": l.c, "--x": l.x }} />
              ))}
            </div>
            <span className="cursor" />
          </div>
          <figcaption>building websites</figcaption>
        </figure>
        <figure className="hcard c2">
          <div className="hc-art art-ai" aria-hidden="true">
            <span className="dot d1">form</span>
            <span className="dot d2">AI</span>
            <span className="dot d3">sheet</span>
            <span className="dot d4">slack</span>
            <svg viewBox="0 0 200 150">
              <path d="M50 40 L100 75 L150 40 M100 75 L100 125" fill="none" stroke="#232323" strokeWidth="2.5" strokeDasharray="6 6" />
            </svg>
          </div>
          <figcaption>automating with AI</figcaption>
        </figure>
        <figure className="hcard c3">
          <div className="hc-art art-lead" aria-hidden="true">
            <span className="sticky s1">KPIs</span>
            <span className="sticky s2">SOPs</span>
            <span className="sticky s3">roadmap</span>
            <span className="sticky s4">RACI</span>
          </div>
          <figcaption>leading transformation projects</figcaption>
        </figure>
      </div>
    </section>
  );
}

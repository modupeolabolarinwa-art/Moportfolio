import { useState } from "react";

/* Real screenshot, tried in this order:
   1. public/assets/shots/<key>.jpg (or .png)
   2. a live capture of the project's site from microlink.io (only if it has a url)
   3. nothing, so the drawn preview underneath stays visible */
function liveShot(url) {
  return (
    "https://api.microlink.io/?url=" + encodeURIComponent(url) +
    "&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=960&waitForTimeout=1500"
  );
}

function RealShot({ projectKey, url }) {
  const sources = [`/assets/shots/${projectKey}.jpg`, `/assets/shots/${projectKey}.png`];
  if (url) sources.push(liveShot(url));
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  if (index >= sources.length) return null;
  return (
    <img
      className={"real-shot" + (loaded ? " loaded" : "")}
      src={sources[index]}
      alt=""
      onLoad={() => setLoaded(true)}
      onError={() => { setLoaded(false); setIndex((i) => i + 1); }}
    />
  );
}

/* ---------- Drawn fallback previews ---------- */
const Browser = () => <div className="browser"><i /><i /><i /></div>;

function NexcentMock() {
  return (
    <>
      <Browser />
      <div className="nx-nav"><span className="nx-logo" /><span /><span /><span /><em /></div>
      <div className="nx-hero">
        <div><span className="l w80" /><span className="l w60" /><span className="l w40 thin" /><span className="nx-btn" /></div>
        <div className="nx-art" />
      </div>
      <div className="nx-logos"><span /><span /><span /><span /><span /></div>
    </>
  );
}

function WorkNestMock() {
  return (
    <>
      <Browser />
      <div className="wn-wrap">
        <ol className="wn-steps">
          <li className="done">Details</li><li className="done">CV</li><li className="on">Questions</li><li>Review</li>
        </ol>
        <div className="wn-card">
          <span className="l w60" /><span className="field" /><span className="l w40 thin" /><span className="field tall" />
          <div className="wn-row"><span className="wn-back" /><span className="wn-next">Continue</span></div>
        </div>
      </div>
    </>
  );
}

function LagosMock() {
  return (
    <>
      <div className="lg-sky"><span className="lg-board">YOUR BRAND HERE</span></div>
      <div className="lg-road"><span className="lg-danfo"><i /><i /></span><span className="lg-car" /><span className="lg-keke" /></div>
      <div className="lg-hud"><span>Ikeja → Mile 12</span><span>₦ fare · 42 km/h</span></div>
    </>
  );
}

function LusterQuestMock() {
  return (
    <>
      <Browser />
      <div className="lq-ticker"><span>RB INDEX</span><span>▲ 2.4</span><span>Carbon −12%</span><span>ESIA 9/10</span></div>
      <div className="lq-body">
        <div className="lq-side"><span /><span className="on" /><span /><span /></div>
        <div className="lq-main">
          <div className="lq-bars">
            {["40%", "65%", "52%", "80%", "90%"].map((h, i) => <i key={i} style={{ "--h": h }} />)}
          </div>
          <div className="lq-chat"><span className="q">Which projects need an ESIA?</span><span className="a" /></div>
        </div>
      </div>
    </>
  );
}

const mocks = {
  nexcent: { cls: "shot-nexcent", Mock: NexcentMock },
  worknest: { cls: "shot-worknest", Mock: WorkNestMock },
  lagos: { cls: "shot-lagos", Mock: LagosMock },
  lusterquest: { cls: "shot-lq", Mock: LusterQuestMock },
};

export function ProjectShot({ project }) {
  const entry = mocks[project.key];
  const Mock = entry?.Mock;
  return (
    <div className={"shot " + (entry?.cls || "")}>
      <RealShot projectKey={project.key} url={project.url} />
      {Mock && <Mock />}
    </div>
  );
}

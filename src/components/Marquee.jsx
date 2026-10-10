import { marqueeTools } from "../data.js";

export default function Marquee() {
  // the list is rendered twice so the strip can loop without a gap
  const loop = [...marqueeTools, ...marqueeTools];
  return (
    <div className="marquee" aria-label={"Tools I use: " + marqueeTools.join(", ")}>
      <div className="marquee-track" aria-hidden="true">
        {loop.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

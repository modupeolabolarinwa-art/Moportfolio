import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../hooks.js";

// "Hi, I'm Mo" screen that counts to 100%, then slides up. Shown once per browser session.
export default function Loader() {
  const reduced = usePrefersReducedMotion();
  const [show] = useState(() => !document.documentElement.classList.contains("no-loader"));
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!show || reduced) return;
    document.body.style.overflow = "hidden";
    const start = performance.now();
    const total = 1300;
    let raf;
    let timer;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / total);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      setDone(true);
      document.body.style.overflow = "";
      try { sessionStorage.setItem("mo-seen", "1"); } catch (e) { /* private mode */ }
      timer = setTimeout(() => setGone(true), 900);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [show, reduced]);

  if (!show || reduced || gone) return null;

  return (
    <div className={"loader" + (done ? " done" : "")} aria-hidden="true">
      <div className="loader-inner">
        <span className="loader-hi">Hi, I'm</span>
        <span className="loader-name">Mo</span>
        <span className="loader-count"><b>{count}</b>%</span>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        right: 24,
        bottom: 32,
        zIndex: 1000,
        background: "var(--accent)",
        color: "var(--primary)",
        border: "none",
        borderRadius: 24,
        boxShadow: "0 2px 10px #b982fc44",
        padding: "10px 16px",
        fontSize: 22,
        cursor: "pointer",
        transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
      }}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/><line x1="12" y1="19" x2="12" y2="9"/></svg>
    </button>
  );
};

export default BackToTop; 
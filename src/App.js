import { useState, useEffect, useCallback, useRef } from "react";

// ─── ALL 34 GROUP STAGE MATCHES (Cairo EEST) ──────────────────────────────────
const MATCHES = [
  {
    id: "m01",
    date: "2026-06-11T22:00+02:00",
    home: "Mexico",
    hf: "🇲🇽",
    away: "South Africa",
    af: "🇿🇦",
    group: "A",
  },
  {
    id: "m02",
    date: "2026-06-12T22:00+02:00",
    home: "Canada",
    hf: "🇨🇦",
    away: "Bosnia & Herz.",
    af: "🇧🇦",
    group: "B",
  },
  {
    id: "m03",
    date: "2026-06-13T22:00+02:00",
    home: "Qatar",
    hf: "🇶🇦",
    away: "Switzerland",
    af: "🇨🇭",
    group: "C",
  },
  {
    id: "m04",
    date: "2026-06-14T01:00+02:00",
    home: "Brazil",
    hf: "🇧🇷",
    away: "Morocco",
    af: "🇲🇦",
    group: "D",
  },
  {
    id: "m05",
    date: "2026-06-14T20:00+02:00",
    home: "Germany",
    hf: "🇩🇪",
    away: "Curacao",
    af: "🇨🇼",
    group: "E",
  },
  {
    id: "m06",
    date: "2026-06-14T23:00+02:00",
    home: "Netherlands",
    hf: "🇳🇱",
    away: "Japan",
    af: "🇯🇵",
    group: "F",
  },
  {
    id: "m07",
    date: "2026-06-15T02:00+02:00",
    home: "Ivory Coast",
    hf: "🇨🇮",
    away: "Ecuador",
    af: "🇪🇨",
    group: "G",
  },
  {
    id: "m08",
    date: "2026-06-15T19:00+02:00",
    home: "Spain",
    hf: "🇪🇸",
    away: "Cape Verde",
    af: "🇨🇻",
    group: "H",
  },
  {
    id: "m09",
    date: "2026-06-15T22:00+02:00",
    home: "Belgium",
    hf: "🇧🇪",
    away: "Egypt",
    af: "🇪🇬",
    group: "I",
  },
  {
    id: "m10",
    date: "2026-06-16T01:00+02:00",
    home: "Saudi Arabia",
    hf: "🇸🇦",
    away: "Uruguay",
    af: "🇺🇾",
    group: "J",
  },
  {
    id: "m11",
    date: "2026-06-16T22:00+02:00",
    home: "France",
    hf: "🇫🇷",
    away: "Senegal",
    af: "🇸🇳",
    group: "K",
  },
  {
    id: "m12",
    date: "2026-06-17T01:00+02:00",
    home: "Iraq",
    hf: "🇮🇶",
    away: "Norway",
    af: "🇳🇴",
    group: "L",
  },
  {
    id: "m13",
    date: "2026-06-17T04:00+02:00",
    home: "Argentina",
    hf: "🇦🇷",
    away: "Algeria",
    af: "🇩🇿",
    group: "A",
  },
  {
    id: "m14",
    date: "2026-06-17T20:00+02:00",
    home: "Portugal",
    hf: "🇵🇹",
    away: "DR Congo",
    af: "🇨🇩",
    group: "B",
  },
  {
    id: "m15",
    date: "2026-06-17T23:00+02:00",
    home: "England",
    hf: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    away: "Croatia",
    af: "🇭🇷",
    group: "C",
  },
  {
    id: "m16",
    date: "2026-06-18T02:00+02:00",
    home: "Ghana",
    hf: "🇬🇭",
    away: "Panama",
    af: "🇵🇦",
    group: "D",
  },
  {
    id: "m17",
    date: "2026-06-18T19:00+02:00",
    home: "Czechia",
    hf: "🇨🇿",
    away: "South Africa",
    af: "🇿🇦",
    group: "E",
  },
  {
    id: "m18",
    date: "2026-06-18T22:00+02:00",
    home: "Switzerland",
    hf: "🇨🇭",
    away: "Bosnia & Herz.",
    af: "🇧🇦",
    group: "F",
  },
  {
    id: "m19",
    date: "2026-06-19T01:00+02:00",
    home: "Canada",
    hf: "🇨🇦",
    away: "Qatar",
    af: "🇶🇦",
    group: "G",
  },
  {
    id: "m20",
    date: "2026-06-19T22:00+02:00",
    home: "USA",
    hf: "🇺🇸",
    away: "Australia",
    af: "🇦🇺",
    group: "H",
  },
  {
    id: "m21",
    date: "2026-06-20T01:00+02:00",
    home: "Scotland",
    hf: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    away: "Morocco",
    af: "🇲🇦",
    group: "I",
  },
  {
    id: "m22",
    date: "2026-06-20T03:30+02:00",
    home: "Brazil",
    hf: "🇧🇷",
    away: "Haiti",
    af: "🇭🇹",
    group: "J",
  },
  {
    id: "m23",
    date: "2026-06-20T20:00+02:00",
    home: "Netherlands",
    hf: "🇳🇱",
    away: "Sweden",
    af: "🇸🇪",
    group: "K",
  },
  {
    id: "m24",
    date: "2026-06-20T23:00+02:00",
    home: "Germany",
    hf: "🇩🇪",
    away: "Ivory Coast",
    af: "🇨🇮",
    group: "L",
  },
  {
    id: "m25",
    date: "2026-06-21T19:00+02:00",
    home: "Spain",
    hf: "🇪🇸",
    away: "Saudi Arabia",
    af: "🇸🇦",
    group: "A",
  },
  {
    id: "m26",
    date: "2026-06-21T22:00+02:00",
    home: "Belgium",
    hf: "🇧🇪",
    away: "Iran",
    af: "🇮🇷",
    group: "B",
  },
  {
    id: "m27",
    date: "2026-06-22T01:00+02:00",
    home: "Uruguay",
    hf: "🇺🇾",
    away: "Cape Verde",
    af: "🇨🇻",
    group: "C",
  },
  {
    id: "m28",
    date: "2026-06-22T20:00+02:00",
    home: "Argentina",
    hf: "🇦🇷",
    away: "Austria",
    af: "🇦🇹",
    group: "D",
  },
  {
    id: "m29",
    date: "2026-06-23T00:00+02:00",
    home: "France",
    hf: "🇫🇷",
    away: "Iraq",
    af: "🇮🇶",
    group: "E",
  },
  {
    id: "m30",
    date: "2026-06-23T02:00+02:00",
    home: "Jordan",
    hf: "🇯🇴",
    away: "Algeria",
    af: "🇩🇿",
    group: "F",
  },
  {
    id: "m31",
    date: "2026-06-23T03:00+02:00",
    home: "Norway",
    hf: "🇳🇴",
    away: "Senegal",
    af: "🇸🇳",
    group: "G",
  },
  {
    id: "m32",
    date: "2026-06-23T20:00+02:00",
    home: "Portugal",
    hf: "🇵🇹",
    away: "Uzbekistan",
    af: "🇺🇿",
    group: "H",
  },
  {
    id: "m33",
    date: "2026-06-23T23:00+02:00",
    home: "England",
    hf: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    away: "Ghana",
    af: "🇬🇭",
    group: "I",
  },
  {
    id: "m34",
    date: "2026-06-24T02:00+02:00",
    home: "Panama",
    hf: "🇵🇦",
    away: "Croatia",
    af: "🇭🇷",
    group: "J",
  },
];

// ─── STORAGE KEYS ─────────────────────────────────────────────────────────────
const K_PLAYERS = "wc2026:v2:players";
const K_PREDS = "wc2026:v2:predictions";
const K_RESULTS = "wc2026:v2:results";

async function sGet(k) {
  try {
    const r = await window.storage.get(k, true);
    return r ? JSON.parse(r.value) : null;
  } catch {
    return null;
  }
}
async function sSet(k, v) {
  try {
    await window.storage.set(k, JSON.stringify(v), true);
  } catch {}
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function calcPts(pred, actual) {
  if (!pred || !actual) return null;
  const ph = +pred.h,
    pa = +pred.a,
    ah = +actual.h,
    aa = +actual.a;
  if (isNaN(ph) || isNaN(pa) || isNaN(ah) || isNaN(aa)) return null;
  if (ph === ah && pa === aa) return 30;
  const pw = ph > pa ? "H" : ph < pa ? "A" : "D",
    aw = ah > aa ? "H" : ah < aa ? "A" : "D";
  if (pw !== aw) return 0;
  return ph - pa === ah - aa ? 15 : 10;
}

function isLocked(m) {
  return Date.now() >= new Date(m.date).getTime() - 24 * 3600 * 1000;
}

function fmtDate(iso) {
  const d = new Date(iso);
  return (
    d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }) +
    " · " +
    d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) +
    " Cairo"
  );
}

function uid(n = 9) {
  return Math.random()
    .toString(36)
    .slice(2, 2 + n);
}

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const G = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');

*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
html { scroll-behavior:smooth; }

body {
  font-family:'DM Sans',sans-serif;
  background: #060d1f;
  min-height:100vh;
  color:#e8edf8;
  overflow-x:hidden;
}

/* ── BG TEXTURE ── */
body::before {
  content:'';
  position:fixed; inset:0; z-index:0;
  background:
    radial-gradient(ellipse 80% 50% at 20% 10%, rgba(191,10,48,0.18) 0%, transparent 60%),
    radial-gradient(ellipse 70% 50% at 85% 80%, rgba(0,40,104,0.30) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 60% 40%, rgba(245,166,35,0.07) 0%, transparent 50%);
  pointer-events:none;
}

.wrap { position:relative; z-index:1; max-width:860px; margin:0 auto; padding:0 16px 80px; }

/* ── HEADER ── */
.hdr {
  position:sticky; top:0; z-index:200;
  background:rgba(6,13,31,0.88);
  backdrop-filter:blur(18px);
  border-bottom:1px solid rgba(245,166,35,0.2);
}
.hdr-inner {
  max-width:860px; margin:0 auto;
  display:flex; align-items:center; justify-content:space-between;
  padding:12px 16px; gap:10px; flex-wrap:wrap;
}
.logo {
  font-family:'Oswald',sans-serif;
  font-size:22px; font-weight:700;
  letter-spacing:2px; color:#fff;
  display:flex; align-items:center; gap:8px;
}
.logo-ball { animation:spin 8s linear infinite; display:inline-block; }
@keyframes spin { to{transform:rotate(360deg)} }
.logo em { color:#F5A623; font-style:normal; }

.nav { display:flex; gap:6px; }
.nbtn {
  padding:6px 16px; border-radius:40px;
  border:1.5px solid rgba(255,255,255,0.2);
  background:transparent; color:rgba(255,255,255,0.75);
  font-family:'DM Sans',sans-serif; font-weight:700; font-size:12px;
  cursor:pointer; transition:all .2s; letter-spacing:.3px;
}
.nbtn:hover { border-color:rgba(245,166,35,0.6); color:#F5A623; }
.nbtn.on { background:#F5A623; border-color:#F5A623; color:#060d1f; }
.hdr-user {
  font-size:11px; color:rgba(255,255,255,0.6); font-weight:600;
  background:rgba(255,255,255,0.07); border-radius:20px; padding:4px 12px;
  white-space:nowrap;
}

/* ── HERO ── */
.hero {
  text-align:center; padding:44px 16px 28px;
  animation:fadeUp .6s ease both;
}
@keyframes fadeUp{ from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
.hero-trophy { font-size:64px; display:block; animation:float 3s ease-in-out infinite; }
@keyframes float{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
.hero-title {
  font-family:'Oswald',sans-serif;
  font-size:clamp(34px,6vw,62px);
  font-weight:700; letter-spacing:3px;
  color:#fff; line-height:1; margin-top:10px;
}
.hero-title b { color:#F5A623; }
.hero-sub { margin-top:8px; color:rgba(255,255,255,0.55); font-size:13px; font-weight:500; letter-spacing:.5px; }

/* ── SCORING PILLS ── */
.score-legend {
  display:flex; flex-wrap:wrap; gap:8px; justify-content:center;
  padding:0 16px 24px;
  animation:fadeUp .6s .15s ease both;
}
.pill {
  display:flex; align-items:center; gap:7px;
  padding:6px 16px; border-radius:40px;
  background:rgba(255,255,255,0.07);
  border:1px solid rgba(255,255,255,0.12);
  font-size:12px; font-weight:600; color:rgba(255,255,255,0.8);
}
.pill-pts {
  background:#F5A623; color:#060d1f;
  border-radius:20px; padding:1px 9px; font-size:11.5px; font-weight:800;
}

/* ── REGISTER ── */
.reg-screen {
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:24px; padding:40px 32px;
  max-width:400px; margin:30px auto;
  text-align:center;
  animation:fadeUp .5s ease both;
  backdrop-filter:blur(12px);
}
.reg-screen h2 {
  font-family:'Oswald',sans-serif;
  font-size:28px; font-weight:700; letter-spacing:2px; color:#fff; margin-bottom:6px;
}
.reg-screen p { color:rgba(255,255,255,0.55); font-size:13.5px; line-height:1.6; margin-bottom:22px; }
.reg-input {
  width:100%; padding:14px 18px;
  background:rgba(255,255,255,0.08);
  border:1.5px solid rgba(255,255,255,0.15);
  border-radius:12px; color:#fff;
  font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600;
  outline:none; transition:border .2s; margin-bottom:10px;
}
.reg-input::placeholder { color:rgba(255,255,255,0.3); }
.reg-input:focus { border-color:#F5A623; }
.reg-err { color:#ff6b6b; font-size:12px; font-weight:700; margin-bottom:10px; }
.reg-btn {
  width:100%; padding:15px;
  background:linear-gradient(90deg,#BF0A30,#002868);
  border:none; border-radius:12px; color:#fff;
  font-family:'Oswald',sans-serif; font-size:20px; font-weight:700;
  letter-spacing:2px; cursor:pointer; transition:opacity .2s, transform .15s;
}
.reg-btn:hover:not(:disabled) { opacity:.9; transform:translateY(-1px); }
.reg-btn:disabled { opacity:.35; cursor:not-allowed; }

/* ── SHARE BOX ── */
.share-box {
  display:flex; align-items:center; gap:10px; flex-wrap:wrap;
  background:rgba(245,166,35,0.08);
  border:1px solid rgba(245,166,35,0.25);
  border-radius:14px; padding:12px 16px; margin-bottom:18px;
  animation:fadeUp .4s ease both;
}
.share-box p { color:rgba(255,255,255,0.8); font-size:12.5px; font-weight:700; white-space:nowrap; }
.share-link {
  flex:1; min-width:0;
  background:rgba(0,0,0,0.35); border:1px solid rgba(255,255,255,0.1);
  border-radius:8px; padding:7px 12px;
  color:#F5A623; font-size:11.5px; font-family:monospace; font-weight:700;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis; cursor:pointer;
}
.copy-btn {
  padding:8px 16px; border-radius:8px; border:none;
  background:#F5A623; color:#060d1f; font-weight:800; font-size:12px;
  cursor:pointer; white-space:nowrap; transition:opacity .2s; flex-shrink:0;
}
.copy-btn:hover { opacity:.85; }

/* ── FILTER TABS ── */
.ftabs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px; }
.ftab {
  padding:7px 16px; border-radius:40px;
  border:1.5px solid rgba(255,255,255,0.15);
  background:transparent; color:rgba(255,255,255,0.6);
  font-family:'DM Sans',sans-serif; font-weight:700; font-size:12px;
  cursor:pointer; transition:all .2s;
}
.ftab:hover { border-color:rgba(245,166,35,0.5); color:#F5A623; }
.ftab.on { background:rgba(245,166,35,0.15); border-color:#F5A623; color:#F5A623; }

/* ── MATCH CARD ── */
.mcard {
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.09);
  border-left:4px solid transparent;
  border-radius:16px; padding:16px 18px;
  margin-bottom:10px;
  transition:transform .15s, border-color .2s, box-shadow .2s;
  animation:fadeUp .4s ease both;
  backdrop-filter:blur(8px);
}
.mcard:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(0,0,0,0.35); }
.mcard.is-locked  { border-left-color:rgba(255,255,255,0.15); }
.mcard.is-saved   { border-left-color:#00c97a; }
.mcard.is-pending { border-left-color:#F5A623; }
.mcard.is-egypt   { border-left-color:#c8102e; background:rgba(200,16,46,0.07); }

.mc-head {
  display:flex; justify-content:space-between; align-items:center;
  margin-bottom:12px; gap:6px; flex-wrap:wrap;
}
.mc-grp { font-size:10px; font-weight:700; letter-spacing:2px; color:#F5A623; text-transform:uppercase; }
.mc-date { font-size:10.5px; color:rgba(255,255,255,0.45); font-weight:600; }
.mc-lock {
  font-size:10px; font-weight:700; border-radius:20px; padding:2px 10px;
  background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.45);
}
.mc-lock.open { background:rgba(245,166,35,0.15); color:#F5A623; }

.mc-body { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:10px; }
.team { display:flex; flex-direction:column; align-items:center; gap:4px; }
.t-flag { font-size:32px; line-height:1; }
.t-name { font-size:11.5px; font-weight:700; color:rgba(255,255,255,0.85); text-align:center; }

.s-wrap { display:flex; align-items:center; gap:7px; }
.s-inp {
  width:52px; height:52px;
  background:rgba(255,255,255,0.08);
  border:2px solid rgba(255,255,255,0.15);
  border-radius:12px; color:#fff;
  font-family:'Oswald',sans-serif; font-size:28px; font-weight:700;
  text-align:center; outline:none; transition:border .2s, background .2s;
  -moz-appearance:textfield; appearance:textfield;
}
.s-inp::-webkit-outer-spin-button,.s-inp::-webkit-inner-spin-button{-webkit-appearance:none;}
.s-inp:focus { border-color:#F5A623; background:rgba(245,166,35,0.08); }
.s-inp:disabled { opacity:.4; cursor:not-allowed; }
.s-sep { font-family:'Oswald',sans-serif; font-size:24px; color:rgba(255,255,255,0.35); }

.mc-save-btn {
  margin-top:12px; width:100%; padding:10px;
  background:linear-gradient(90deg,#002868,#0041b5);
  border:none; border-radius:10px; color:#fff;
  font-family:'DM Sans',sans-serif; font-weight:700; font-size:13px;
  cursor:pointer; transition:all .2s; letter-spacing:.2px;
}
.mc-save-btn:hover:not(:disabled) { opacity:.9; transform:translateY(-1px); }
.mc-save-btn:disabled { background:rgba(255,255,255,0.07); color:rgba(255,255,255,0.25); cursor:not-allowed; transform:none; }
.mc-save-btn.done { background:linear-gradient(90deg,#00843d,#00c97a); }

.res-badge {
  margin-top:10px; padding:8px 14px; border-radius:10px;
  font-size:12px; font-weight:700; text-align:center; letter-spacing:.2px;
}
.rb-30 { background:rgba(245,166,35,0.15); color:#F5A623; border:1px solid rgba(245,166,35,0.3); }
.rb-15 { background:rgba(0,65,181,0.2); color:#70a8ff; border:1px solid rgba(70,140,255,0.3); }
.rb-10 { background:rgba(0,132,61,0.2); color:#5dd18a; border:1px solid rgba(0,201,122,0.3); }
.rb-0  { background:rgba(191,10,48,0.15); color:#ff7a7a; border:1px solid rgba(255,80,80,0.2); }

/* ── LEADERBOARD ── */
.lb-wrap { animation:fadeUp .4s ease both; }
.lb-banner {
  background:linear-gradient(135deg,#BF0A30 0%,#7a0a1e 40%,#002868 100%);
  border-radius:20px 20px 0 0; padding:22px 24px;
  display:flex; align-items:center; gap:14px;
}
.lb-banner h2 {
  font-family:'Oswald',sans-serif;
  font-size:28px; font-weight:700; letter-spacing:3px; color:#fff;
}
.lb-table { background:rgba(255,255,255,0.04); border-radius:0 0 20px 20px; overflow:hidden; }
.lb-row {
  display:grid; grid-template-columns:50px 1fr auto;
  align-items:center; gap:12px; padding:13px 20px;
  border-bottom:1px solid rgba(255,255,255,0.06);
  transition:background .15s;
}
.lb-row:hover { background:rgba(255,255,255,0.04); }
.lb-row:last-child { border-bottom:none; }
.lb-row.me { background:rgba(245,166,35,0.07); }

.lb-rank {
  font-family:'Oswald',sans-serif; font-size:24px; font-weight:700;
  text-align:center; color:rgba(255,255,255,0.3);
}
.lb-rank.g1 { color:#F5A623; }
.lb-rank.g2 { color:#94a3b8; }
.lb-rank.g3 { color:#cd7c3a; }

.lb-name { font-weight:700; font-size:14px; color:#e8edf8; }
.lb-name-sub { font-size:10.5px; color:rgba(255,255,255,0.4); font-weight:500; margin-top:2px; }
.lb-name-sub .lbl-you::after { content:" 👈"; font-size:11px; }
.lb-pts-col { text-align:right; }
.lb-pts { font-family:'Oswald',sans-serif; font-size:28px; font-weight:700; color:#F5A623; line-height:1; }
.lb-pts-sub { font-size:9.5px; font-weight:700; color:rgba(255,255,255,0.35); letter-spacing:1px; text-transform:uppercase; }

/* ── ADMIN ── */
.admin-wrap { animation:fadeUp .4s ease both; }
.admin-note {
  background:rgba(191,10,48,0.12); border:1px solid rgba(191,10,48,0.25);
  border-radius:12px; padding:12px 16px; margin-bottom:16px;
  color:rgba(255,180,180,0.85); font-size:13px; font-weight:600;
}
.acard {
  background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.09);
  border-radius:14px; padding:16px 18px; margin-bottom:10px;
}
.acard h3 {
  font-family:'Oswald',sans-serif; font-size:16px; font-weight:600;
  letter-spacing:1.5px; color:rgba(255,255,255,0.85); margin-bottom:12px;
}
.a-row { display:flex; align-items:center; gap:9px; flex-wrap:wrap; }
.a-date { flex:1; min-width:160px; font-size:12px; color:rgba(255,255,255,0.45); font-weight:600; }
.a-inp {
  width:46px; height:40px;
  background:rgba(255,255,255,0.08); border:2px solid rgba(255,255,255,0.15);
  border-radius:9px; color:#fff;
  font-family:'Oswald',sans-serif; font-size:22px; text-align:center;
  outline:none; transition:border .2s;
  -moz-appearance:textfield; appearance:textfield;
}
.a-inp::-webkit-outer-spin-button,.a-inp::-webkit-inner-spin-button{-webkit-appearance:none;}
.a-inp:focus { border-color:#BF0A30; }
.a-sep { font-family:'Oswald',sans-serif; font-size:18px; color:rgba(255,255,255,0.3); }
.a-save {
  padding:8px 16px; border:none; border-radius:9px;
  background:#BF0A30; color:#fff; font-weight:700; font-size:12px;
  cursor:pointer; transition:opacity .2s;
}
.a-save:hover { opacity:.85; }
.a-done { font-size:12px; color:#5dd18a; font-weight:700; }

/* ── EMPTY ── */
.empty-state { text-align:center; padding:50px 20px; color:rgba(255,255,255,0.4); }
.empty-state p { font-size:15px; font-weight:600; margin-top:12px; }

/* ── TOASTS ── */
.toast-zone { position:fixed; bottom:24px; right:20px; z-index:999; display:flex; flex-direction:column; gap:7px; align-items:flex-end; }
.toast {
  background:rgba(255,255,255,0.12); backdrop-filter:blur(16px);
  border:1px solid rgba(255,255,255,0.2);
  color:#fff; border-radius:12px; padding:10px 18px;
  font-size:13px; font-weight:700; letter-spacing:.2px;
  box-shadow:0 8px 32px rgba(0,0,0,0.4);
  animation:tin .3s ease, tout .35s ease 2.1s forwards;
  white-space:nowrap;
}
@keyframes tin  { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:none} }
@keyframes tout { to{opacity:0;transform:translateX(20px)} }

@media(max-width:480px){
  .mc-body { gap:6px; }
  .t-flag { font-size:26px; }
  .s-inp { width:44px; height:44px; font-size:24px; }
  .lb-name-sub { display:none; }
}
`;

// ─── TOAST HOOK ───────────────────────────────────────────────────────────────
let _tid = 0;
function useToast() {
  const [toasts, setToasts] = useState([]);
  const add = useCallback((msg) => {
    const id = ++_tid;
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);
  return { toasts, add };
}

// ═══════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [players, setPlayers] = useState({}); // {pid: name}
  const [preds, setPreds] = useState({}); // {pid: {mid: {h,a}}}
  const [results, setResults] = useState({}); // {mid: {h,a}}
  const [playerId, setPid] = useState(null);
  const [playerName, setPName] = useState("");
  const [tab, setTab] = useState("predict");
  const [nameInput, setNI] = useState("");
  const [nameErr, setNE] = useState("");
  const [saving, setSaving] = useState({});
  const [copied, setCopied] = useState(false);
  const { toasts, add: toast } = useToast();
  const loaded = useRef(false);

  // ── Init ──
  useEffect(() => {
    const pid = new URLSearchParams(window.location.search).get("player");
    if (pid) setPid(pid);
  }, []);

  const refresh = useCallback(async () => {
    const [pl, pr, re] = await Promise.all([
      sGet(K_PLAYERS),
      sGet(K_PREDS),
      sGet(K_RESULTS),
    ]);
    const pls = pl || {};
    setPlayers(pls);
    setPreds(pr || {});
    setResults(re || {});
    const pid = new URLSearchParams(window.location.search).get("player");
    if (pid && pls[pid]) {
      setPid(pid);
      setPName(pls[pid]);
    } else if (pid) setPid(pid);
    loaded.current = true;
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  // ── Register ──
  async function register() {
    const name = nameInput.trim();
    if (!name || name.length < 2) {
      setNE("Enter at least 2 characters");
      return;
    }
    const taken = Object.values(players).map((n) => n.toLowerCase());
    if (taken.includes(name.toLowerCase())) {
      setNE("Name taken — choose another");
      return;
    }
    const pid = playerId || uid();
    const updated = { ...players, [pid]: name };
    await sSet(K_PLAYERS, updated);
    setPlayers(updated);
    setPid(pid);
    setPName(name);
    const url = new URL(window.location.href);
    url.searchParams.set("player", pid);
    window.history.replaceState({}, "", url.toString());
    toast(`🎉 Welcome ${name}! Predictions open!`);
  }

  // ── Save prediction ──
  async function savePred(mid, h, a) {
    if (!playerId) return;
    setSaving((s) => ({ ...s, [mid]: true }));
    const up = {
      ...preds,
      [playerId]: { ...(preds[playerId] || {}), [mid]: { h, a } },
    };
    await sSet(K_PREDS, up);
    setPreds(up);
    setSaving((s) => ({ ...s, [mid]: false }));
    toast("✅ Saved!");
  }

  // ── Save result (admin) ──
  async function saveResult(mid, h, a) {
    const up = { ...results, [mid]: { h, a } };
    await sSet(K_RESULTS, up);
    setResults(up);
    toast("📊 Result saved!");
  }

  // ── Leaderboard ──
  function board() {
    return Object.entries(players)
      .map(([pid, name]) => {
        const mp = preds[pid] || {};
        let pts = 0,
          exact = 0,
          gd = 0,
          correct = 0,
          wrong = 0;
        MATCHES.forEach((m) => {
          const p = mp[m.id],
            r = results[m.id];
          if (!p || !r) return;
          const s = calcPts(p, r);
          if (s === null) return;
          pts += s;
          if (s === 30) exact++;
          else if (s === 15) gd++;
          else if (s === 10) correct++;
          else wrong++;
        });
        return {
          pid,
          name,
          pts,
          exact,
          gd,
          correct,
          wrong,
          predicted: Object.keys(mp).length,
        };
      })
      .sort((a, b) => b.pts - a.pts || b.exact - a.exact || b.gd - a.gd);
  }

  const isAdmin =
    new URLSearchParams(window.location.search).get("admin") === "wc2026";
  const isReg = playerId && players[playerId];
  const myPreds = preds[playerId] || {};
  const shareUrl = isReg
    ? `${location.origin}${location.pathname}?player=${playerId}`
    : "";

  async function copy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast("🔗 Link copied!");
    } catch {
      toast("Select the link manually");
    }
  }

  return (
    <div>
      <style>{G}</style>

      {/* HEADER */}
      <div className="hdr">
        <div className="hdr-inner">
          <div className="logo">
            <span className="logo-ball">⚽</span>
            WC<em>2026</em> PREDICTOR
          </div>
          <div className="nav">
            <button
              className={`nbtn${tab === "predict" ? " on" : ""}`}
              onClick={() => setTab("predict")}
            >
              ⚽ Predict
            </button>
            <button
              className={`nbtn${tab === "leaderboard" ? " on" : ""}`}
              onClick={() => setTab("leaderboard")}
            >
              🏆 Board
            </button>
            {isAdmin && (
              <button
                className={`nbtn${tab === "admin" ? " on" : ""}`}
                onClick={() => setTab("admin")}
              >
                🔧 Admin
              </button>
            )}
          </div>
          {isReg && <div className="hdr-user">👤 {playerName}</div>}
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <span className="hero-trophy">🏆</span>
        <div className="hero-title">
          FIFA WORLD CUP <b>2026</b>
        </div>
        <div className="hero-sub">
          Group Stage Score Predictor · Cairo Time (EEST)
        </div>
      </div>

      {/* SCORING LEGEND */}
      <div className="score-legend">
        <div className="pill">
          Correct winner <span className="pill-pts">10 pts</span>
        </div>
        <div className="pill">
          Right goal difference <span className="pill-pts">15 pts</span>
        </div>
        <div className="pill">
          Exact score <span className="pill-pts">30 pts</span>
        </div>
      </div>

      <div className="wrap">
        {/* REGISTER */}
        {!isReg && (
          <div className="reg-screen">
            <div style={{ fontSize: 52, marginBottom: 10 }}>🌍</div>
            <h2>JOIN THE GAME</h2>
            <p>
              Enter your name to get your personal prediction link. You can
              update predictions up to{" "}
              <strong style={{ color: "#F5A623" }}>24 hours</strong> before each
              kickoff.
            </p>
            <input
              className="reg-input"
              placeholder="Your name e.g. Ahmed"
              value={nameInput}
              onChange={(e) => {
                setNI(e.target.value);
                setNE("");
              }}
              onKeyDown={(e) => e.key === "Enter" && register()}
              maxLength={28}
            />
            {nameErr && <div className="reg-err">⚠️ {nameErr}</div>}
            <button
              className="reg-btn"
              onClick={register}
              disabled={!nameInput.trim()}
            >
              LET'S PLAY! 🚀
            </button>
          </div>
        )}

        {/* SHARE LINK */}
        {isReg && shareUrl && tab === "predict" && (
          <div className="share-box">
            <p>🔗 Your link:</p>
            <div className="share-link" onClick={copy} title="Click to copy">
              {shareUrl}
            </div>
            <button className="copy-btn" onClick={copy}>
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
        )}

        {/* PREDICT */}
        {isReg && tab === "predict" && (
          <MatchList
            matches={MATCHES}
            myPreds={myPreds}
            results={results}
            saving={saving}
            onSave={savePred}
          />
        )}

        {/* LEADERBOARD */}
        {tab === "leaderboard" && (
          <Leaderboard rows={board()} myId={playerId} />
        )}

        {/* ADMIN */}
        {isAdmin && tab === "admin" && (
          <AdminPanel matches={MATCHES} results={results} onSave={saveResult} />
        )}
      </div>

      {/* TOASTS */}
      <div className="toast-zone">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            {t.msg}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MATCH LIST ───────────────────────────────────────────────────────────────
function MatchList({ matches, myPreds, results, saving, onSave }) {
  const [grp, setGrp] = useState("ALL");
  const groups = [...new Set(matches.map((m) => m.group))];
  const shown =
    grp === "ALL" ? matches : matches.filter((m) => m.group === grp);
  const pending = matches.filter((m) => !isLocked(m) && !myPreds[m.id]).length;

  return (
    <>
      {pending > 0 && (
        <div
          style={{
            background: "rgba(245,166,35,0.1)",
            border: "1px solid rgba(245,166,35,0.25)",
            borderRadius: 12,
            padding: "10px 16px",
            marginBottom: 14,
            fontSize: 13,
            fontWeight: 700,
            color: "#F5A623",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          ⏳ You have <strong style={{ color: "#fff" }}>{pending}</strong> match
          {pending > 1 ? "es" : ""} left to predict!
        </div>
      )}
      <div className="ftabs">
        <button
          className={`ftab${grp === "ALL" ? " on" : ""}`}
          onClick={() => setGrp("ALL")}
        >
          All Matches
        </button>
        {groups.map((g) => (
          <button
            key={g}
            className={`ftab${grp === g ? " on" : ""}`}
            onClick={() => setGrp(g)}
          >
            Group {g}
          </button>
        ))}
      </div>
      {shown.map((m, i) => (
        <MatchCard
          key={m.id}
          match={m}
          pred={myPreds[m.id]}
          result={results[m.id]}
          saving={!!saving[m.id]}
          onSave={onSave}
          delay={i}
        />
      ))}
    </>
  );
}

// ─── MATCH CARD ───────────────────────────────────────────────────────────────
function MatchCard({ match, pred, result, saving, onSave, delay = 0 }) {
  const locked = isLocked(match);
  const [h, setH] = useState(pred?.h ?? "");
  const [a, setA] = useState(pred?.a ?? "");
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setH(pred?.h ?? "");
    setA(pred?.a ?? "");
    setDirty(false);
  }, [pred]);

  const hasPred = pred?.h !== undefined && pred?.h !== "";
  const pts = result && hasPred ? calcPts(pred, result) : null;

  const isEgypt = match.home === "Egypt" || match.away === "Egypt";
  const cardClass = `mcard${
    isEgypt
      ? " is-egypt"
      : locked
      ? " is-locked"
      : hasPred
      ? " is-saved"
      : " is-pending"
  }`;

  const ptsClass =
    pts === 30 ? "rb-30" : pts === 15 ? "rb-15" : pts === 10 ? "rb-10" : "rb-0";
  const ptsLabel =
    pts === 30
      ? "🎯 Exact score! +30"
      : pts === 15
      ? "✨ Right GD! +15"
      : pts === 10
      ? "✅ Winner! +10"
      : "❌ Miss — 0 pts";

  function chg(side, val) {
    const v = val.replace(/\D/g, "").slice(0, 2);
    side === "h" ? setH(v) : setA(v);
    setDirty(true);
  }

  const canSave = !locked && dirty && h !== "" && a !== "";

  return (
    <div className={cardClass} style={{ animationDelay: `${delay * 0.04}s` }}>
      <div className="mc-head">
        <span className="mc-grp">
          Group {match.group} {isEgypt ? "🇪🇬" : ""}
        </span>
        <span className="mc-date">{fmtDate(match.date)}</span>
        {locked ? (
          <span className="mc-lock">🔒 Locked</span>
        ) : (
          <span className="mc-lock open">✏️ Open</span>
        )}
      </div>

      <div className="mc-body">
        <div className="team">
          <span className="t-flag">{match.hf}</span>
          <span className="t-name">{match.home}</span>
        </div>
        <div className="s-wrap">
          <input
            className="s-inp"
            type="number"
            min="0"
            max="20"
            value={h}
            onChange={(e) => chg("h", e.target.value)}
            disabled={locked}
            placeholder="–"
          />
          <span className="s-sep">:</span>
          <input
            className="s-inp"
            type="number"
            min="0"
            max="20"
            value={a}
            onChange={(e) => chg("a", e.target.value)}
            disabled={locked}
            placeholder="–"
          />
        </div>
        <div className="team">
          <span className="t-flag">{match.af}</span>
          <span className="t-name">{match.away}</span>
        </div>
      </div>

      {!locked && (
        <button
          className={`mc-save-btn${hasPred && !dirty ? " done" : ""}`}
          disabled={!canSave || saving}
          onClick={() => onSave(match.id, h, a)}
        >
          {saving
            ? "Saving…"
            : hasPred && !dirty
            ? "✓ Saved"
            : "Save Prediction"}
        </button>
      )}

      {result && hasPred && (
        <div className={`res-badge ${ptsClass}`}>
          Final: {result.h} – {result.a} &nbsp;·&nbsp; {ptsLabel}
        </div>
      )}
      {result && !hasPred && (
        <div className="res-badge rb-0">
          Final: {result.h} – {result.a} &nbsp;·&nbsp; No prediction entered
        </div>
      )}
    </div>
  );
}

// ─── LEADERBOARD ─────────────────────────────────────────────────────────────
function Leaderboard({ rows, myId }) {
  const rClass = (i) => (i === 0 ? "g1" : i === 1 ? "g2" : i === 2 ? "g3" : "");
  const rIcon = (i) =>
    i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1;

  return (
    <div className="lb-wrap">
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        <div className="lb-banner">
          <span style={{ fontSize: 36 }}>🏆</span>
          <h2>LEADERBOARD</h2>
        </div>
        {!rows.length ? (
          <div className="empty-state">
            <div style={{ fontSize: 52 }}>🌍</div>
            <p>No predictions yet — share the link!</p>
          </div>
        ) : (
          rows.map((r, i) => (
            <div key={r.pid} className={`lb-row${r.pid === myId ? " me" : ""}`}>
              <div className={`lb-rank ${rClass(i)}`}>{rIcon(i)}</div>
              <div>
                <div className="lb-name">{r.name}</div>
                <div className="lb-name-sub">
                  {r.pid === myId && <span className="lbl-you">You</span>}
                  🎯{r.exact} ✨{r.gd} ✅{r.correct} · {r.predicted}/
                  {MATCHES.length} predicted
                </div>
              </div>
              <div className="lb-pts-col">
                <div className="lb-pts">{r.pts}</div>
                <div className="lb-pts-sub">points</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ─── ADMIN PANEL ─────────────────────────────────────────────────────────────
function AdminPanel({ matches, results, onSave }) {
  const [inp, setInp] = useState({});
  const get = (mid, s) => inp[mid]?.[s] ?? results[mid]?.[s] ?? "";
  const set = (mid, s, v) =>
    setInp((x) => ({
      ...x,
      [mid]: { ...(x[mid] || {}), [s]: v.replace(/\D/g, "").slice(0, 2) },
    }));

  return (
    <div className="admin-wrap">
      <div className="admin-note">
        🔧 <strong>Admin Panel</strong> — Enter final scores to automatically
        update all players' points. Access via <code>?admin=wc2026</code>
      </div>
      {matches.map((m) => (
        <div key={m.id} className="acard">
          <h3>
            {m.hf} {m.home} vs {m.af} {m.away}
          </h3>
          <div className="a-row">
            <span className="a-date">{fmtDate(m.date)}</span>
            <input
              className="a-inp"
              type="number"
              min="0"
              max="20"
              placeholder="H"
              value={get(m.id, "h")}
              onChange={(e) => set(m.id, "h", e.target.value)}
            />
            <span className="a-sep">:</span>
            <input
              className="a-inp"
              type="number"
              min="0"
              max="20"
              placeholder="A"
              value={get(m.id, "a")}
              onChange={(e) => set(m.id, "a", e.target.value)}
            />
            <button
              className="a-save"
              onClick={() => {
                const h = get(m.id, "h"),
                  a = get(m.id, "a");
                if (h !== "" && a !== "") onSave(m.id, h, a);
              }}
            >
              Save Result
            </button>
            {results[m.id] && (
              <span className="a-done">
                ✓ {results[m.id].h}–{results[m.id].a}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import React from 'react';

export default function Home() {
  const htmlContent = `
    ${`<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Orthophoniste Agadir | Ilham Zahid - Cabinet Dcheira Jihadia</title>
<meta name="description" content="Orthophoniste diplomee a Agadir, Dcheira Jihadia. Ilham Zahid traite les troubles du langage, articulation, begaiement et difficultes scolaires chez l'enfant et l'adulte. RDV WhatsApp rapide.">

<style>
/* ── TOKENS ────────────────────────────────────────────────── */
:root {
  --primary:       #0c6e5f;
  --primary-dark:  #095248;
  --primary-mid:    #0d7d6d;
  --primary-light: #e8f5f2;
  --accent:         #d4a847;
  --dark:           #1a2332;
  --text:           #2d3748;
  --bg:             #ffffff;
  --border-soft:    #edf2f7;
  --whatsapp:       #25D366;
  --radius-sm:  8px;
  --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
}

/* ── RESET ─────────────────────────────────────────────────── */
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Inter',sans-serif; color:var(--text); background:var(--bg); line-height:1.7;}
.ar{font-family:'Tajawal',sans-serif;direction:rtl;}
a{color:inherit;text-decoration:none;}

/* ── NAVBAR ────────────────────────────────────────────────── */
.navbar { position: fixed; top: 0; width: 100%; padding: 0 5%; height: 68px; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.96); backdrop-filter: blur(20px); z-index: 1000; border-bottom: 1px solid #edf2f7; }
.nav-brand { display: flex; align-items: center; gap: 10px; font-weight: 700; color: var(--dark); }
.nav-cta { background: var(--primary) !important; color: #fff !important; padding: 8px 18px !important; border-radius: var(--radius-sm); font-weight: 600; }

/* ── HERO ──────────────────────────────────────────────────── */
.hero { min-height: 100vh; display: flex; align-items: center; padding: 120px 5% 90px; }
.hero-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 420px; gap: 64px; align-items: center; }
.btn-whatsapp { background: var(--whatsapp); color: #fff; padding: 13px 26px; border-radius: var(--radius-sm); font-weight: 600; }

/* ── SECTIONS ──────────────────────────────────────────────── */
.section { padding: 96px 5%; }
.section-alt { background: #f8fafb; }
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; }
.service-card { background: #fff; border: 1px solid #edf2f7; padding: 28px; border-radius: 14px; }

/* ── FOOTER ────────────────────────────────────────────────── */
.footer { background: var(--dark); color: #fff; padding: 56px 5% 28px; text-align: center; }
</style>
</head>
<body>
<nav class="navbar" id="navbar">
  <a href="#" class="nav-brand">Ilham Zahid — Orthophoniste</a>
  <div class="nav-links">
    <a href="https://wa.me/212663036699" class="nav-cta">Prendre RDV</a>
  </div>
</nav>

<header class="hero" id="accueil">
  <div class="hero-inner">
    <div class="hero-content">
      <h1 style="font-size:3.4rem; color:var(--dark); line-height:1.15;"><span>Orthophoniste</span><br>à Agadir</h1>
      <p style="font-size:1.1rem; color:#64748b; margin: 20px 0 36px;">Ilham Zahid, spécialiste en troubles du langage à Dcheira Jihadia.</p>
      <a href="https://wa.me/212663036699" class="btn-whatsapp">Prendre RDV WhatsApp</a>
    </div>
    <div style="background:#fff; border:1px solid #edf2f7; padding:32px; border-radius:20px; border-left:4px solid var(--primary);">
      <p style="font-weight:700;">Zahid Ilham — Orthophoniste</p>
      <p style="font-size:0.875rem; color:#64748b; margin-top:10px;">Master en Orthophonie — Marrakech. Pratique clinique à Dcheira El Jihadia.</p>
    </div>
  </div>
</header>

<section class="section section-alt" id="services">
  <div style="max-width:1100px; margin:0 auto;">
    <h2 style="text-align:center; margin-bottom:40px;">Nos Services</h2>
    <div class="services-grid">
      <div class="service-card"><h3>Troubles de la parole</h3><p>Bégaiement et articulation.</p></div>
      <div class="service-card"><h3>Langage écrit</h3><p>Dyslexie et dysorthographie.</p></div>
      <div class="service-card"><h3>Langage oral</h3><p>Retards de langage et dysphasie.</p></div>
    </div>
  </div>
</section>

<footer class="footer">
  <p>© 2026 Ilham Zahid — Orthophoniste à Agadir | Dcheira Jihadia</p>
</footer>

<script>
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,0.06)' : 'none';
});
<\/script>
</body>
</html>`.replace(/`/g, '\\`')}
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
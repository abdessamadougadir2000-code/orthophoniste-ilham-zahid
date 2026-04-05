"use client";

import React from 'react';

export default function Home() {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr" dir="ltr">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orthophoniste Agadir | Ilham Zahid</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Tajawal:wght@500;700&display=swap" rel="stylesheet">
    <style>
      :root { --primary: #0c6e5f; --dark: #1a2332; --text: #2d3748; --bg: #ffffff; --bg-alt: #f8fafb; --whatsapp: #25D366; }
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
      body{font-family:'Inter', sans-serif; color:var(--text); line-height:1.7; background:var(--bg); overflow-x:hidden;}
      .navbar { position: fixed; top: 0; width: 100%; height: 68px; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.96); backdrop-filter: blur(10px); z-index: 1000; padding: 0 5%; border-bottom: 1px solid #edf2f7; }
      .nav-brand { font-weight: 700; color: var(--dark); text-decoration:none; font-size: 1.2rem; }
      .hero { min-height: 100vh; display: flex; align-items: center; padding: 120px 5% 80px; }
      .hero-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 400px; gap: 60px; align-items: center; }
      .btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 10px; font-weight: 600; text-decoration: none; transition: 0.3s; }
      .btn-whatsapp { background: var(--whatsapp); color: #fff; box-shadow: 0 4px 15px rgba(37,211,102,0.3); }
      .hero-bio-card { background: #fff; border: 1px solid #edf2f7; border-radius: 20px; padding: 35px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border-left: 6px solid var(--primary); }
      .section { padding: 90px 5%; }
      .section-alt { background: var(--bg-alt); }
      .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-top: 40px; }
      .service-card { background: #fff; border: 1px solid #edf2f7; padding: 35px; border-radius: 15px; transition: 0.3s; }
      .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
      .service-card h3 { color: var(--primary); margin-bottom: 15px; }
      .footer { background: var(--dark); color: #fff; padding: 60px 5%; text-align: center; }
      @media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; text-align: center; } .hero-bio-card { margin: 0 auto; } }
    </style>
    </head>
    <body>
      <nav class="navbar">
        <a href="#" class="nav-brand">Ilham Zahid — Orthophoniste</a>
        <div style="display:flex; gap:20px; align-items:center;">
          <a href="/blog" style="font-weight:600; color:var(--primary); text-decoration:none;">Blog</a>
          <a href="https://wa.me/212663036699" class="btn btn-whatsapp" style="padding: 10px 20px;">Contact</a>
        </div>
      </nav>

      <header class="hero">
        <div class="hero-inner">
          <div>
            <h1 style="font-size: clamp(2.5rem, 6vw, 4rem); color: var(--dark); line-height: 1.1; margin-bottom: 25px;">
              Cabinet d'Orthophonie<br><span style="color:var(--primary)">Agadir</span>
            </h1>
            <p style="font-size: 1.2rem; color: #64748b; margin-bottom: 40px;">Ilham Zahid, spécialiste en troubles du langage oral, écrit et de l'apprentissage.</p>
            <a href="https://wa.me/212663036699" class="btn btn-whatsapp">Prendre RDV WhatsApp</a>
          </div>
          <div class="hero-bio-card">
            <h3 style="margin-bottom:10px;">Ilham Zahid</h3>
            <p style="color:var(--primary); font-weight:600; font-size:0.9rem; margin-bottom:20px;">Master en Orthophonie — Marrakech</p>
            <p style="font-size:0.95rem; color:#64748b;">Cabinet spécialisé à Dcheira Jihadia pour le traitement du bégaiement, dyslexie et retards de langage.</p>
          </div>
        </div>
      </header>

      <section class="section section-alt" id="services">
        <div style="max-width:1100px; margin:0 auto;">
          <h2 style="text-align:center; font-size:2.5rem; margin-bottom:15px;">Nos Services</h2>
          <div class="services-grid">
            <div class="service-card"><h3>Troubles de la parole</h3><p>Prise en charge du bégaiement, troubles d'articulation et de la voix.</p></div>
            <div class="service-card"><h3>Langage écrit</h3><p>Traitement de la dyslexie, dysorthographie et troubles d'apprentissage.</p></div>
            <div class="service-card"><h3>Langage oral</h3><p>Retards de langage, dysphasie et aphasie chez l'adulte.</p></div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <p>© 2026 Ilham Zahid — Orthophoniste à Agadir | Dcheira Jihadia</p>
      </footer>
    </body>
    </html>
  `;

  return (
    <main dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
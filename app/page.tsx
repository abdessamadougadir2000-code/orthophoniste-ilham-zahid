"use client";

import React from 'react';

export default function Home() {
  // هاد السطر String.raw كيضمن بلي الكود كيتعرض كيفما هو بلا أخطاء
  const htmlContent = String.raw`
<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Orthophoniste Agadir | Ilham Zahid - Cabinet Dcheira Jihadia</title>
<meta name="description" content="Orthophoniste diplomee a Agadir, Dcheira Jihadia. Ilham Zahid traite les troubles du langage, articulation, begaiement et difficultes scolaires chez l'enfant et l'adulte. RDV WhatsApp rapide.">
<meta name="keywords" content="orthophoniste agadir, orthophonie maroc, retard de langage enfant agadir, trouble articulation agadir, orthophoniste dcheira jihadia, begaiement agadir, orthophoniste maroc, trouble du langage agadir">
<meta name="author" content="Ilham Zahid">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<link rel="canonical" href="https://peppy-souffle-9205ee.netlify.app/">
<meta property="og:title" content="Orthophoniste Agadir - Ilham Zahid | Cabinet Dcheira Jihadia">
<meta property="og:description" content="Cabinet d'orthophonie a Dcheira Jihadia, Agadir. Evaluation et traitement des troubles du langage, articulation et apprentissage. Enfants et adultes. RDV WhatsApp.">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_MA">
<meta property="og:url" content="https://peppy-souffle-9205ee.netlify.app/">
<meta property="og:site_name" content="Orthophoniste Agadir - Ilham Zahid">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Orthophoniste Agadir - Ilham Zahid">
<meta name="twitter:description" content="Cabinet d'orthophonie a Agadir. Troubles du langage, articulation, begaiement. RDV WhatsApp rapide.">
<meta name="geo.region" content="MA-AGD">
<meta name="geo.placename" content="Dcheira Jihadia, Agadir">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"MedicalBusiness","name":"Ilham Zahid - Orthophoniste","url":"https://peppy-souffle-9205ee.netlify.app/","telephone":"+212663036699","email":"zahid.ilham98@gmail.com","address":{"@type":"PostalAddress","streetAddress":"Dcheira Jihadia","addressLocality":"Agadir","addressRegion":"Souss-Massa","postalCode":"80000","addressCountry":"MA"},"geo":{"@type":"GeoCoordinates","latitude":30.3753,"longitude":-9.5373},"medicalSpecialty":"SpeechPathology","areaServed":[{"@type":"City","name":"Agadir"},{"@type":"City","name":"Dcheira Jihadia"},{"@type":"City","name":"Inezgane"},{"@type":"AdministrativeArea","name":"Souss-Massa"}],"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"09:00","closes":"18:00"},{"@type":"OpeningHoursSpecification","dayOfWeek":"Saturday","opens":"09:00","closes":"13:00"}]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Quand consulter un orthophoniste pour mon enfant a Agadir ?","acceptedAnswer":{"@type":"Answer","text":"Il est recommande de consulter un orthophoniste si votre enfant presente un retard de langage, des difficultes d'articulation, du begaiement, ou des problemes de lecture et ecriture a l'ecole."}},{"@type":"Question","name":"Comment prendre rendez-vous avec l'orthophoniste a Dcheira Jihadia ?","acceptedAnswer":{"@type":"Answer","text":"Vous pouvez prendre rendez-vous facilement via WhatsApp au +212 6 63 03 66 99 ou par email a zahid.ilham98@gmail.com."}}]}
</script>

<style>
/* ── TOKENS ────────────────────────────────────────────────── */
:root {
  --primary:       #0c6e5f;
  --primary-dark:  #095248;
  --primary-mid:    #0d7d6d;
  --primary-light: #e8f5f2;
  --primary-glow:  rgba(12,110,95,0.12);
  --accent:         #d4a847;
  --accent-light:  #fdf6e3;
  --dark:           #1a2332;
  --text:           #2d3748;
  --text-light:    #64748b;
  --text-xlight:    #94a3b8;
  --bg:             #ffffff;
  --bg-alt:         #f8fafb;
  --bg-subtle:      #f1f5f4;
  --border:         #e2e8f0;
  --border-soft:    #edf2f7;
  --whatsapp:       #25D366;
  --shadow-xs:  0 1px 2px rgba(0,0,0,0.06);
  --shadow-sm:  0 2px 8px rgba(0,0,0,0.07);
  --shadow-md:  0 8px 30px rgba(0,0,0,0.09);
  --shadow-lg:  0 20px 60px rgba(0,0,0,0.12);
  --shadow-xl:  0 32px 80px rgba(0,0,0,0.14);
  --radius-sm:  8px;
  --radius:     14px;
  --radius-lg:  20px;
  --radius-xl:  28px;
  --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
}

/* ── RESET ─────────────────────────────────────────────────── */
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;}
body{
  font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif;
  color:var(--text);
  background:var(--bg);
  line-height:1.7;
  font-size:16px;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
.ar{font-family:'Tajawal',sans-serif;direction:rtl;}
a{color:inherit;text-decoration:none;}
img{max-width:100%;display:block;}

/* ── NAVBAR ────────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 5%;
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition), box-shadow var(--transition);
}
.navbar.scrolled {
  border-bottom-color: var(--border-soft);
  box-shadow: 0 2px 20px rgba(0,0,0,0.06);
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--dark);
  letter-spacing: -0.02em;
}
.nav-brand-icon {
  width: 36px;
  height: 36px;
  background: var(--primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.nav-brand-icon svg { color: #fff; }
.nav-links { display: flex; align-items: center; gap: 6px; }
.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-light);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
}
.nav-links a:hover { color: var(--primary); background: var(--primary-light); }
.nav-cta {
  background: var(--primary) !important;
  color: #fff !important;
  padding: 8px 18px !important;
  border-radius: var(--radius-sm) !important;
  font-size: 0.85rem !important;
  font-weight: 600 !important;
  margin-left: 8px;
  letter-spacing: 0.01em;
  box-shadow: 0 2px 8px rgba(12,110,95,0.25) !important;
  transition: all var(--transition) !important;
}
.nav-cta:hover {
  background: var(--primary-dark) !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 4px 16px rgba(12,110,95,0.35) !important;
}
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius-sm);
  transition: background var(--transition);
}
.mobile-toggle:hover { background: var(--bg-alt); }
.mobile-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--dark);
  margin: 5px 0;
  transition: all 0.3s;
  border-radius: 2px;
}

/* ── HERO ──────────────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 5% 90px;
  position: relative;
  overflow: hidden;
  background: #fff;
}
.hero-bg-shape {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.hero-bg-shape::before {
  content: '';
  position: absolute;
  top: -180px;
  right: -200px;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, var(--primary-light) 0%, transparent 70%);
}
.hero-bg-shape::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: -100px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-light) 0%, transparent 70%);
  opacity: 0.6;
}
.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 64px;
  align-items: center;
}
.hero-content { max-width: 580px; }
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary-light);
  color: var(--primary);
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 28px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: 1px solid rgba(12,110,95,0.15);
}
.hero-badge svg { width: 14px; height: 14px; flex-shrink: 0; }
.hero h1 {
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  font-weight: 700;
  color: var(--dark);
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -0.03em;
}
.hero h1 span { color: var(--primary); }
.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: 36px;
  line-height: 1.8;
  font-weight: 400;
}
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 48px; }

/* ── BUTTONS ───────────────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
  letter-spacing: 0.01em;
  white-space: nowrap;
}
.btn-whatsapp {
  background: var(--whatsapp);
  color: #fff;
  box-shadow: 0 4px 18px rgba(37,211,102,0.3);
}
.btn-whatsapp:hover {
  background: #20bd5a;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37,211,102,0.4);
}
.btn-outline {
  background: transparent;
  color: var(--primary);
  border: 1.5px solid var(--primary);
}
.btn-outline:hover { background: var(--primary); color: #fff; transform: translateY(-1px); }
.btn-primary {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 4px 14px rgba(12,110,95,0.25);
}
.btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(12,110,95,0.35); }
.btn-white {
  background: #fff;
  color: var(--primary);
  box-shadow: 0 4px 15px rgba(0,0,0,0.12);
  font-weight: 600;
}
.btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }

/* ── HERO TRUST ────────────────────────────────────────────── */
.hero-trust {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 28px;
  border-top: 1px solid var(--border-soft);
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: var(--text-light);
  font-weight: 500;
}
.trust-item svg { width: 18px; height: 18px; color: var(--primary); flex-shrink: 0; }

/* ── HERO BIO CARD ─────────────────────────────────────────── */
.hero-bio-card {
  background: var(--bg);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}
.hero-bio-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: linear-gradient(180deg, var(--primary), var(--accent));
  border-radius: 4px 0 0 4px;
}
.hero-bio-card .bio-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 3px;
  letter-spacing: -0.01em;
}
.hero-bio-card .bio-tagline {
  font-size: 0.82rem;
  color: var(--primary);
  font-style: italic;
  margin-bottom: 18px;
  font-weight: 500;
}
.hero-bio-card .bio-divider {
  height: 1px;
  background: var(--border-soft);
  margin-bottom: 18px;
}
.hero-bio-card .bio-section {
  margin-bottom: 16px;
}
.hero-bio-card .bio-section:last-child { margin-bottom: 0; }
.hero-bio-card .bio-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary);
  margin-bottom: 5px;
}
.hero-bio-card .bio-text {
  font-size: 0.875rem;
  color: var(--text-light);
  line-height: 1.75;
}
.hero-bio-card .bio-diploma {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--accent-light);
  color: #8a6a1f;
  padding: 5px 12px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  margin-top: 12px;
  border: 1px solid rgba(212,168,71,0.25);
}

/* ── SECTIONS ──────────────────────────────────────────────── */
.section { padding: 96px 5%; }
.section-alt { background: var(--bg-alt); }
.section-inner { max-width: 1100px; margin: 0 auto; }
.section-header {
  text-align: center;
  max-width: 580px;
  margin: 0 auto 56px;
}
.section-label {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary);
  background: var(--primary-light);
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 14px;
  border: 1px solid rgba(12,110,95,0.12);
}
.section-header h2 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 14px;
  letter-spacing: -0.025em;
  line-height: 1.25;
}
.section-header p { color: var(--text-light); font-size: 1.05rem; line-height: 1.75; }

/* ── SERVICES ──────────────────────────────────────────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  max-width: 1100px;
  margin: 0 auto;
}
.service-card {
  background: var(--bg);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 28px;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}
.service-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition);
}
.service-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
  border-color: rgba(12,110,95,0.15);
}
.service-card:hover::after { transform: scaleX(1); }
.service-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  color: var(--primary);
  transition: all var(--transition);
}
.service-card:hover .service-icon {
  background: var(--primary);
  color: #fff;
}
.service-card h3 {
  font-size: 1rem;
  font-weight: 650;
  color: var(--dark);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}
.service-card p { font-size: 0.875rem; color: var(--text-light); line-height: 1.7; }

/* ── ABOUT ─────────────────────────────────────────────────── */
.about-content {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.about-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
  background: var(--primary-light);
  border: 1px solid rgba(12,110,95,0.12);
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 16px;
}
.about-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 16px;
  letter-spacing: -0.025em;
}
.about-text p {
  color: var(--text-light);
  margin-bottom: 14px;
  line-height: 1.8;
  font-size: 0.95rem;
}
.about-diploma-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent-light);
  border: 1px solid rgba(212,168,71,0.3);
  color: #7a5c15;
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 8px;
}
.about-diploma-badge svg { color: var(--accent); flex-shrink: 0; }
.about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.stat-card {
  background: var(--bg);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 24px 20px;
  text-align: center;
  transition: all var(--transition);
  box-shadow: var(--shadow-xs);
}
.stat-card:hover { box-shadow: var(--shadow-sm); transform: translateY(-2px); }
.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  display: block;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 6px;
}
.stat-label { font-size: 0.8rem; color: var(--text-light); font-weight: 500; line-height: 1.4; }

/* ── PROCESS ───────────────────────────────────────────────── */
.process-steps {
  max-width: 780px;
  margin: 0 auto;
  display: grid;
  gap: 0;
  position: relative;
}
.process-steps::before {
  content: '';
  position: absolute;
  left: 23px;
  top: 48px;
  bottom: 48px;
  width: 2px;
  background: linear-gradient(180deg, var(--primary), var(--accent));
  opacity: 0.2;
  border-radius: 2px;
}
.step {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  align-items: start;
  padding: 28px 0;
  border-bottom: 1px solid var(--border-soft);
  position: relative;
}
.step:last-child { border-bottom: none; }
.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  flex-shrink: 0;
  box-shadow: 0 4px 14px rgba(12,110,95,0.25);
  position: relative;
  z-index: 1;
}
.step-content {}
.step h3 {
  font-size: 1.05rem;
  font-weight: 650;
  color: var(--dark);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
  padding-top: 10px;
}
.step p { font-size: 0.9rem; color: var(--text-light); line-height: 1.75; }

/* ── TESTIMONIALS ──────────────────────────────────────────── */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}
.testimonial-card {
  background: var(--bg);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  padding: 32px;
  position: relative;
  transition: all var(--transition);
}
.testimonial-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
.quote-mark {
  font-size: 3.5rem;
  line-height: 1;
  color: var(--primary-light);
  font-family: Georgia, serif;
  margin-bottom: 4px;
  display: block;
}
.testimonial-stars {
  color: var(--accent);
  font-size: 0.85rem;
  margin-bottom: 14px;
  letter-spacing: 3px;
}
.testimonial-text {
  font-size: 0.925rem;
  color: var(--text);
  line-height: 1.8;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 400;
}
.testimonial-author-row { display: flex; align-items: center; gap: 12px; }
.testimonial-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.testimonial-author { font-weight: 650; font-size: 0.9rem; color: var(--dark); }
.testimonial-detail { font-size: 0.8rem; color: var(--text-xlight); margin-top: 1px; }

/* ── FAQ ───────────────────────────────────────────────────── */
.faq-list { max-width: 720px; margin: 0 auto; }
.faq-item {
  border-bottom: 1px solid var(--border-soft);
  border-radius: 0;
}
.faq-item:first-child { border-top: 1px solid var(--border-soft); }
.faq-question {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 22px 0;
  font-size: 0.975rem;
  font-weight: 600;
  color: var(--dark);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-family: inherit;
  line-height: 1.5;
  transition: color var(--transition);
}
.faq-question:hover { color: var(--primary); }
.faq-chevron {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
  transition: all var(--transition);
}
.faq-item.active .faq-chevron {
  background: var(--primary);
  color: #fff;
  transform: rotate(180deg);
}
.faq-chevron svg { width: 16px; height: 16px; transition: transform 0.3s; }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease; }
.faq-answer p { padding: 0 0 22px; font-size: 0.9rem; color: var(--text-light); line-height: 1.8; }
.faq-item.active .faq-answer { max-height: 400px; }

/* ── CTA BANNER ────────────────────────────────────────────── */
.cta-banner {
  padding: 80px 5%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 50%, var(--primary-dark) 100%);
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.cta-banner::before {
  content: '';
  position: absolute;
  top: -60px; right: -60px;
  width: 300px; height: 300px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
}
.cta-banner::after {
  content: '';
  position: absolute;
  bottom: -80px; left: -40px;
  width: 220px; height: 220px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
}
.cta-inner { position: relative; z-index: 1; }
.cta-banner h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  margin-bottom: 14px;
  letter-spacing: -0.025em;
}
.cta-banner p {
  font-size: 1.05rem;
  opacity: 0.88;
  margin-bottom: 32px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

/* ── CONTACT ───────────────────────────────────────────────── */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}
.contact-info { display: grid; gap: 12px; align-content: start; }
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 20px;
  background: var(--bg);
  border-radius: var(--radius);
  border: 1px solid var(--border-soft);
  transition: all var(--transition);
}
.contact-item:hover { border-color: rgba(12,110,95,0.2); box-shadow: var(--shadow-sm); }
.contact-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}
.contact-item h3 { font-size: 0.78rem; font-weight: 600; color: var(--text-xlight); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 3px; }
.contact-item p, .contact-item a { font-size: 0.925rem; color: var(--text); font-weight: 500; }
.contact-item a:hover { color: var(--primary); }
.map-container {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border-soft);
  min-height: 340px;
  box-shadow: var(--shadow-sm);
}
.map-container iframe { width: 100%; height: 100%; min-height: 340px; border: 0; display: block; }

/* ── FOOTER ────────────────────────────────────────────────── */
.footer {
  background: var(--dark);
  color: #fff;
  padding: 56px 5% 28px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.footer-brand-icon {
  width: 32px; height: 32px;
  background: var(--primary);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.footer-brand { font-weight: 700; font-size: 1rem; letter-spacing: -0.01em; }
.footer-desc { font-size: 0.85rem; opacity: 0.55; max-width: 280px; line-height: 1.7; }
.footer-links h4 { font-size: 0.72rem; font-weight: 700; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.45; }
.footer-links a { display: block; font-size: 0.875rem; opacity: 0.65; margin-bottom: 10px; transition: opacity var(--transition); }
.footer-links a:hover { opacity: 1; }
.footer-bottom { text-align: center; font-size: 0.8rem; opacity: 0.35; }

/* ── WHATSAPP FLOAT ────────────────────────────────────────── */
.whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  background: var(--whatsapp);
  color: #fff;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 24px rgba(37,211,102,0.45);
  z-index: 999;
  transition: all 0.3s;
}
.whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 8px 32px rgba(37,211,102,0.55); }
.whatsapp-float svg { width: 26px; height: 26px; }
.whatsapp-pulse {
  position: absolute;
  width: 100%; height: 100%;
  border-radius: 50%;
  background: var(--whatsapp);
  animation: pulse 2.5s infinite;
  z-index: -1;
}
@keyframes pulse {
  0%   { transform: scale(1); opacity: 0.4; }
  70%  { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1.5); opacity: 0; }
}

/* ── RESPONSIVE ────────────────────────────────────────────── */
@media (max-width: 960px) {
  .hero-inner { grid-template-columns: 1fr; gap: 40px; }
  .hero-bio-card { max-width: 520px; }
}
@media (max-width: 768px) {
  .navbar { padding: 0 5%; }
  .nav-links {
    position: fixed;
    top: 0; right: -100%;
    width: 280px; height: 100vh;
    background: #fff;
    flex-direction: column;
    padding: 80px 28px 28px;
    gap: 4px;
    box-shadow: var(--shadow-xl);
    transition: right 0.3s cubic-bezier(0.4,0,0.2,1);
    z-index: 999;
    align-items: flex-start;
  }
  .nav-links.open { right: 0; }
  .nav-links a { width: 100%; padding: 10px 14px; }
  .nav-cta { width: 100%; justify-content: center; margin-left: 0 !important; margin-top: 8px; }
  .mobile-toggle { display: block; z-index: 1001; }
  .mobile-overlay {
    display: none; position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.35);
    z-index: 998; backdrop-filter: blur(2px);
  }
  .mobile-overlay.open { display: block; }
  .hero { padding: 100px 5% 64px; min-height: auto; }
  .hero-trust { gap: 14px; }
  .section { padding: 64px 5%; }
  .about-content { grid-template-columns: 1fr; gap: 36px; }
  .contact-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
  .footer-content { flex-direction: column; gap: 28px; }
  .process-steps::before { display: none; }
}
@media (max-width: 480px) {
  .hero h1 { font-size: 1.9rem; }
  .hero-actions { flex-direction: column; }
  .hero-actions .btn { width: 100%; justify-content: center; }
  .about-stats { grid-template-columns: 1fr 1fr; }
}

/* ── ACCESSIBILITY ─────────────────────────────────────────── */
:focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; border-radius: 4px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
@media print { .navbar,.whatsapp-float,.cta-banner { display: none; } body { font-size: 12pt; } }

/* ── FADE-IN ANIMATION ─────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up-d1 { animation-delay: 0.1s; }
.fade-up-d2 { animation-delay: 0.2s; }
.fade-up-d3 { animation-delay: 0.3s; }
.fade-up-d4 { animation-delay: 0.4s; }
</style>
</head>
<body>

<nav class="navbar" id="navbar" role="navigation" aria-label="Navigation principale">
  <a href="#" class="nav-brand" aria-label="Accueil - Ilham Zahid Orthophoniste">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    Ilham Zahid
  </a>
  <div class="nav-links" id="navLinks" role="menubar">
    <a href="/blog" role="menuitem">Blog</a>
    <a href="#services" role="menuitem">Services</a>
    <a href="#parcours" role="menuitem">Comment ça marche</a>
    <a href="#temoignages" role="menuitem">Avis</a>
    <a href="#faq" role="menuitem">FAQ</a>
    <a href="#contact" role="menuitem">Contact</a>
    <a href="https://wa.me/212663036699" class="nav-cta" role="menuitem" target="_blank" rel="noopener">Prendre RDV</a>
  </div>
  <button class="mobile-toggle" id="mobileToggle" aria-label="Menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-overlay" id="mobileOverlay" aria-hidden="true"></div>

<header class="hero" id="accueil">
  <div class="hero-bg-shape" aria-hidden="true"></div>
  <div class="hero-inner">
    <div class="hero-content">
      <div class="hero-badge fade-up">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
        Diplômée d'un master en orthophonie à Marrakech
      </div>
      <h1 class="fade-up fade-up-d1">
        <span>Orthophoniste</span><br>à Agadir<br>Dcheira Jihadia
      </h1>
      <p class="hero-subtitle fade-up fade-up-d2">
        Ilham Zahid, orthophoniste spécialisée dans le traitement des troubles du langage, de l'articulation et de l'apprentissage chez l'enfant et l'adulte.
      </p>
      <div class="hero-actions fade-up fade-up-d3">
        <a href="https://wa.me/212663036699?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20consultation%20en%20orthophonie." class="btn btn-whatsapp" target="_blank" rel="noopener" aria-label="Prendre rendez-vous via WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.56 4.143 1.54 5.885L0 24l6.305-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.995 0-3.893-.535-5.563-1.545l-.4-.237-4.137 1.084 1.104-4.032-.26-.414A9.713 9.713 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
          Prendre RDV WhatsApp
        </a>
        <a href="#services" class="btn btn-outline">Découvrir nos services</a>
      </div>
      <div class="hero-trust fade-up fade-up-d4" aria-label="Indicateurs de confiance">
        <div class="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
          Diplômée d'un master en orthophonie à Marrakech
        </div>
        <div class="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Enfants et adultes
        </div>
        <div class="trust-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Agadir — Dcheira Jihadia
        </div>
      </div>
    </div>

    <div class="hero-bio-card fade-up fade-up-d2">
      <p class="bio-name">Zahid Ilham — Orthophoniste | Cadre de Santé | Enseignante</p>
      <p class="bio-tagline">Un engagement au service de la parole, du langage et de l'humain.</p>
      <div class="bio-divider"></div>
      <div class="bio-section">
        <p class="bio-label">Pratique clinique</p>
        <p class="bio-text">Le Cabinet d'Orthophonie Zahid Ilham, situé à Dcheira El Jihadia, accueille enfants, adolescents et adultes. Troubles du langage oral et écrit, retards de développement, dyslexie, troubles phonologiques — chaque situation est abordée avec rigueur et bienveillance.</p>
      </div>
      <div class="bio-section">
        <p class="bio-label">Enseignement</p>
        <p class="bio-text">Enseignante contribuante à la formation des étudiants en orthophonie afin de permettre un développement de la discipline au Maroc.</p>
      </div>
      <span class="bio-diploma">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        Master en Orthophonie — Marrakech
      </span>
    </div>
  </div>
</header>

<section class="section section-alt" id="services" aria-labelledby="services-title">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label">Nos services</span>
      <h2 id="services-title">Prise en charge orthophonique complète</h2>
      <p>Des soins adaptés à chaque patient, enfant ou adulte, avec une approche personnalisée, rigoureuse et bienveillante.</p>
    </div>
    <div class="services-grid">
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
        </div>
        <h3>Troubles de la parole</h3>
        <p>Bégaiement, troubles de l'articulation, dysphonie et toute difficulté affectant la production sonore de la parole.</p>
      </article>
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <h3>Troubles du langage oral</h3>
        <p>Retards de langage, dysphasie, troubles liés à l'autisme ou à la déficience intellectuelle, aphasie chez l'adulte.</p>
      </article>
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        </div>
        <h3>Troubles du langage écrit</h3>
        <p>Dyslexie, dysorthographie, dysgraphie et difficultés d'apprentissage de la lecture et de l'écriture.</p>
      </article>
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M12 12v4"/><path d="M8 20c0-2.2 1.8-4 4-4s4 1.8 4 4"/><path d="M4 20h2M18 20h2"/></svg>
        </div>
        <h3>Troubles de l'oralité & déglutition</h3>
        <p>Difficultés alimentaires chez l'enfant, troubles de la déglutition chez l'adulte et dysfonctions oro-faciales.</p>
      </article>
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
        </div>
        <h3>Fonctions cognitives & communication</h3>
        <p>Troubles de la mémoire, de l'attention et de la communication liés au langage, incluant les démences.</p>
      </article>
      <article class="service-card">
        <div class="service-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <h3>Populations spécifiques</h3>
        <p>Accompagnement personnalisé des personnes porteuses de trisomie 21, TSA, paralysie cérébrale, déficience auditive ou fente palatine.</p>
      </article>
    </div>
  </div>
</section>

<section class="section" id="apropos" aria-labelledby="about-title">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label">À propos</span>
      <h2 id="about-title">Votre orthophoniste à Agadir</h2>
    </div>
    <div class="about-content">
      <div class="about-text">
        <div class="about-tag" aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          Parcours & expertise
        </div>
        <h3>Ilham Zahid <span class="ar" style="font-size:1rem;font-weight:400;">(إلهام زاهد)</span></h3>
        <p style="font-style:italic;color:var(--primary);font-size:0.9rem;margin-bottom:14px;">Un engagement au service de la parole, du langage et de l'humain.</p>
        <p>Zahid Ilham est orthophoniste diplômée et cadre de santé, exerçant à Agadir, Maroc. Son parcours singulier articule trois dimensions complémentaires : une pratique clinique rigoureuse, un engagement pédagogique auprès des futurs professionnels de la santé, et un rôle actif dans l'encادrement de la recherche paramédicale.</p>
        <p><strong>Pratique clinique</strong> — Le Cabinet d'Orthophonie Zahid Ilham, situé à Dcheira El Jihadia, accueille enfants, adolescents et adultes en quête d'un accompagnement spécialisé. Troubles du langage oral et écrit, retards de développement, dyslexie, troubles phonologiques — chaque situation est abordée avec rigueur, bienveillance et une approche pleinement individualisée.</p>
        <p><strong>Enseignement</strong> — Enseignante contribuante à la formation des étudiants en orthophonie afin de permettre un développement de la discipline au Maroc.</p>
        <div class="about-diploma-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          Diplômée d'un master en orthophonie à Marrakech
        </div>
      </div>
      <div class="about-stats" aria-label="Chiffres clés">
        <div class="stat-card">
          <span class="stat-number">6+</span>
          <span class="stat-label">Spécialités traitées</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">98%</span>
          <span class="stat-label">Satisfaction patients</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">Lun–Sam</span>
          <span class="stat-label">Disponibilité</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">Agadir</span>
          <span class="stat-label">Dcheira Jihadia</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-alt" id="parcours" aria-labelledby="process-title">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label">Comment ça marche</span>
      <h2 id="process-title">Votre parcours en 6 étapes</h2>
      <p>De la prise de contact au suivi long terme, chaque étape est conçue pour vous accompagner avec rigueur et bienveillance.</p>
    </div>
    <div class="process-steps">
      <div class="step">
        <div class="step-number" aria-hidden="true">1</div>
        <div class="step-content">
          <h3>La prise de contact</h3>
          <p>La démarche commence par un appel ou une demande de rendez-vous. Un premier échange permet de cerner la nature de la demande et d'orienter vers le type de consultation adapté.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number" aria-hidden="true">2</div>
        <div class="step-content">
          <h3>L'anamnèse</h3>
          <p>Lors de la première séance, un entretien approfondi est mené avec le patient et/ou sa famille. Il permet de recueillir l'histoire de vie, le développement, les antécédents médicaux et les difficultés observées au quotidien.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number" aria-hidden="true">3</div>
        <div class="step-content">
          <h3>Le bilan orthophonique</h3>
          <p>Une évaluation complète et standardisée est réalisée à l'aide d'outils cliniques adaptés à l'âge et au profil du patient. Elle permet de poser un diagnostic précis et d'identifier les axes de rééducation prioritaires.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number" aria-hidden="true">4</div>
        <div class="step-content">
          <h3>Le compte rendu</h3>
          <p>Les résultats du bilan sont restitués clairement au patient et à sa famille, accompagnés d'explications accessibles et de recommandations concretes.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number" aria-hidden="true">5</div>
        <div class="step-content">
          <h3>La prise en charge rééducative</h3>
          <p>Un protocole de rééducation individualisé est élaboré et mis en place. Les séances sont régulières, progressives et adaptées en continu selon l'évolution du patient.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number" aria-hidden="true">6</div>
        <div class="step-content">
          <h3>Le suivi & la collaboration</h3>
          <p>Un suivi régulier est assuré tout au long de la prise en charge. Le cabinet travaille en étroite collaboration avec les familles, les enseignants, les médecins et les autres professionnels de santé pour garantir une prise en charge globale et cohérente.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="temoignages" aria-labelledby="testimonials-title">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label">Témoignages</span>
      <h2 id="testimonials-title">Ce que disent nos patients</h2>
      <p>La confiance de nos patients est notre plus grande fierté.</p>
    </div>
    <div class="testimonials-grid">
      <article class="testimonial-card">
        <span class="quote-mark" aria-hidden="true">"</span>
        <div class="testimonial-stars" aria-label="5 étoiles sur 5">★★★★★</div>
        <p class="testimonial-text">Mon fils de 4 ans ne parlait presque pas. Après quelques mois de séances avec Mme Zahid, il fait maintenant des phrases complètes. Je recommande vivement !</p>
        <div class="testimonial-author-row">
          <div class="testimonial-avatar" aria-hidden="true">F</div>
          <div>
            <p class="testimonial-author">Fatima Z.</p>
            <p class="testimonial-detail">Maman d'un enfant de 4 ans — Agadir</p>
          </div>
        </div>
      </article>
      <article class="testimonial-card">
        <span class="quote-mark" aria-hidden="true">"</span>
        <div class="testimonial-stars" aria-label="5 étoiles sur 5">★★★★★</div>
        <p class="testimonial-text">Très professionnelle et patiente. Ma fille avait des problèmes d'articulation et les progrès sont remarquables. Le cabinet est accueillant et adapté aux enfants.</p>
        <div class="testimonial-author-row">
          <div class="testimonial-avatar" aria-hidden="true">K</div>
          <div>
            <p class="testimonial-author">Karim B.</p>
            <p class="testimonial-detail">Papa d'une enfant de 6 ans — Dcheira Jihadia</p>
          </div>
        </div>
      </article>
      <article class="testimonial-card">
        <span class="quote-mark" aria-hidden="true">"</span>
        <div class="testimonial-stars" aria-label="5 étoiles sur 5">★★★★★</div>
        <p class="testimonial-text">J'ai consulté pour un bégaiement qui me gênait depuis des années. Mme Zahid m'a aidé à reprendre confiance. Merci pour votre accompagnement bienveillant.</p>
        <div class="testimonial-author-row">
          <div class="testimonial-avatar" aria-hidden="true">A</div>
          <div>
            <p class="testimonial-author">Ahmed M.</p>
            <p class="testimonial-detail">Patient adulte — Inezgane</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section class="section section-alt" id="faq" aria-labelledby="faq-title">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label">Questions fréquentes</span>
      <h2 id="faq-title">FAQ — Orthophonie à Agadir</h2>
      <p>Les réponses à vos questions les plus courantes.</p>
    </div>
    <div class="faq-list" role="list">
      <div class="faq-item active" role="listitem">
        <button class="faq-question" aria-expanded="true">
          Quand consulter un orthophoniste pour mon enfant ?
          <span class="faq-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="faq-answer" role="region">
          <p>Il est recommandé de consulter si votre enfant présente un retard de langage (ne parle pas ou peu à 2-3 ans), des difficultés d'articulation, du bégaiement, ou des problèmes de lecture et écriture à l'école. Plus la prise en charge est précoce, meilleurs sont les résultats.</p>
        </div>
      </div>
      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">
          Comment prendre rendez-vous ?
          <span class="faq-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="faq-answer" role="region">
          <p>Vous pouvez prendre rendez-vous facilement via WhatsApp au +212 6 63 03 66 99 ou par email à <a href="mailto:zahid.ilham98@gmail.com">zahid.ilham98@gmail.com</a>. Nous répondons rapidement pour fixer un créneau qui vous convient. Le cabinet se trouve à Dcheira Jihadia, près d'Agadir.</p>
        </div>
      </div>
      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">
          Quels troubles traitez-vous ?
          <span class="faq-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="faq-answer" role="region">
          <p>Nous traitons les troubles de la parole (bégaiement, articulation, dysphonie), du langage oral et écrit (dyslexie, dysorthographie), de l'oralité et de la déglutition, ainsi que des fonctions cognitives liées au langage. Nous prenons en charge les enfants et les adultes.</p>
        </div>
      </div>
      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">
          L'orthophonie est-elle adaptée aux adultes ?
          <span class="faq-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="faq-answer" role="region">
          <p>Oui, l'orthophonie s'adresse aussi aux adultes. Elle peut aider en cas de bégaiement, troubles de la voix, difficultés de communication après un AVC, ou tout autre trouble du langage oral et écrit. Il n'est jamais trop tard pour consulter.</p>
        </div>
      </div>
      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">
          Combien de séances sont nécessaires ?
          <span class="faq-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="faq-answer" role="region">
          <p>Le nombre de séances varie selon le trouble et sa sévérité. Après un bilan initial, un plan de traitement personnalisé est établi. En général, les séances sont hebdomadaires et la durée du suivi peut aller de quelques semaines à plusieurs mois.</p>
        </div>
      </div>
      <div class="faq-item" role="listitem">
        <button class="faq-question" aria-expanded="false">
          Quels sont les horaires du cabinet ?
          <span class="faq-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg></span>
        </button>
        <div class="faq-answer" role="region">
          <p>Le cabinet est ouvert du lundi au vendredi de 9h à 18h, et le samedi de 9h à 13h. Pour prendre rendez-vous, contactez-nous par WhatsApp au +212 6 63 03 66 99.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-banner" aria-labelledby="cta-title">
  <div class="cta-inner">
    <h2 id="cta-title">Votre enfant a besoin d'aide ?</h2>
    <p>N'attendez pas. Plus la prise en charge est précoce, meilleurs sont les résultats. Prenez rendez-vous dès aujourd'hui.</p>
    <a href="https://wa.me/212663036699?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20pour%20une%20consultation%20en%20orthophonie." class="btn btn-white" target="_blank" rel="noopener">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.56 4.143 1.54 5.885L0 24l6.305-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.995 0-3.893-.535-5.563-1.545l-.4-.237-4.137 1.084 1.104-4.032-.26-.414A9.713 9.713 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
      Prendre RDV maintenant
    </a>
  </div>
</section>

<section class="section" id="contact" aria-labelledby="contact-title">
  <div class="section-inner">
    <div class="section-header">
      <span class="section-label">Contact</span>
      <h2 id="contact-title">Nous trouver à Agadir</h2>
      <p>Cabinet situé à Dcheira Jihadia, facilement accessible depuis Agadir et Inezgane.</p>
    </div>
    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <h3>Téléphone / WhatsApp</h3>
            <a href="tel:+212663036699">+212 6 63 03 66 99</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div>
            <h3>Email</h3>
            <a href="mailto:zahid.ilham98@gmail.com">zahid.ilham98@gmail.com</a>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div>
            <h3>Adresse</h3>
            <p>Dcheira Jihadia, Agadir<br>Région Souss-Massa, Maroc</p>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <h3>Horaires</h3>
            <p>Lun — Ven : 9h00 – 18h00<br>Samedi : 9h00 – 13h00</p>
          </div>
        </div>
      </div>
     <div class="map-container">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.932973950669!2d-9.539828224434222!3d30.381335074756592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c76008661fbd%3A0xc76d5418c909a69e!2sCabinet%20D&#39;orthophonie%20Zahid%20Ilham!5e0!3m2!1sfr!2sma!4v1744755106677!5m2!1sfr!2sma" 
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    title="Localisation du Cabinet d'orthophonie Zahid Ilham">
  </iframe>
</div>
</section>

<a href="https://wa.me/212663036699?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous." class="whatsapp-float" target="_blank" rel="noopener" aria-label="Nous contacter sur WhatsApp">
  <div class="whatsapp-pulse" aria-hidden="true"></div>
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.138.56 4.143 1.54 5.885L0 24l6.305-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.995 0-3.893-.535-5.563-1.545l-.4-.237-4.137 1.084 1.104-4.032-.26-.414A9.713 9.713 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
</a>

<footer class="footer" role="contentinfo">
  <div class="footer-content">
    <div>
      <div class="footer-brand-row">
        <div class="footer-brand-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
        </div>
        <span class="footer-brand">Ilham Zahid — Orthophoniste</span>
      </div>
      <p class="footer-desc">Cabinet d'orthophonie à Dcheira Jihadia, Agadir. Prise en charge des troubles du langage chez l'enfant et l'adulte.</p>
    </div>
    <div class="footer-links">
      <h4>Navigation</h4>
      <a href="#services">Services</a>
      <a href="#parcours">Comment ça marche</a>
      <a href="#temoignages">Témoignages</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="footer-links">
      <h4>Services</h4>
      <a href="#services">Troubles de la parole</a>
      <a href="#services">Troubles du langage oral</a>
      <a href="#services">Troubles du langage écrit</a>
      <a href="#services">Déglutition & oralité</a>
      <a href="#services">Bilan orthophonique</a>
    </div>
  </div>
  <div class="footer-bottom">
    © 2026 Ilham Zahid — Orthophoniste à Agadir, Dcheira Jihadia  |  Tous droits réservés
  </div>
</footer>

<script>
// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Mobile menu
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  mobileOverlay.classList.toggle('open', isOpen);
  mobileToggle.setAttribute('aria-expanded', isOpen);
  mobileOverlay.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}
mobileToggle.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) toggleMenu();
  });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});
</script>
</body>
</html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
} 
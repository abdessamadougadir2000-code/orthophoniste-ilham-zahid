export default function Home() {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr" dir="ltr">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orthophoniste Agadir | Ilham Zahid - Cabinet Dcheira Jihadia</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
      /* --- TOKENS --- */
      :root {
        --primary: #0c6e5f; --primary-dark: #095248; --primary-light: #e8f5f2;
        --accent: #d4a847; --dark: #1a2332; --text: #2d3748; --text-light: #64748b;
        --bg: #ffffff; --bg-alt: #f8fafb; --border-soft: #edf2f7; --whatsapp: #25D366;
        --radius: 14px; --transition: 0.22s cubic-bezier(0.4,0,0.2,1);
      }
      /* --- RESET & BASIC STYLES --- */
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
      body{ font-family:'Inter', sans-serif; color:var(--text); line-height:1.7; }
      .navbar { position: fixed; top: 0; width: 100%; height: 68px; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.96); backdrop-filter: blur(20px); z-index: 1000; padding: 0 5%; border-bottom: 1px solid var(--border-soft); }
      .nav-brand { font-weight: 700; color: var(--dark); display: flex; align-items: center; gap: 10px; }
      .hero { padding: 120px 5% 90px; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg); }
      .hero-inner { max-width: 1100px; display: grid; grid-template-columns: 1fr 400px; gap: 40px; }
      .btn { padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }
      .btn-whatsapp { background: var(--whatsapp); color: #fff; }
      .section { padding: 80px 5%; }
      .footer { background: var(--dark); color: #fff; padding: 40px 5%; text-align: center; }
      /* Responsive */
      @media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; } }
    </style>
    </head>
    <body>
      <nav class="navbar">
        <div class="nav-brand">Ilham Zahid</div>
        <div style="display:flex; gap:15px;">
          <a href="/blog" style="font-weight:600; color:var(--primary);">Blog</a>
          <a href="https://wa.me/212663036699" class="btn btn-whatsapp" style="padding: 5px 15px;">Contact</a>
        </div>
      </nav>

      <header class="hero">
        <div class="hero-inner">
          <div>
            <h1 style="font-size: 3rem; color: var(--dark); margin-bottom: 20px;">Orthophoniste à <span style="color:var(--primary)">Agadir</span></h1>
            <p style="font-size: 1.2rem; color: var(--text-light); margin-bottom: 30px;">Cabinet spécialisé dans les troubles du langage, de l'articulation et de l'apprentissage.</p>
            <a href="https://wa.me/212663036699" class="btn btn-whatsapp">Prendre RDV WhatsApp</a>
          </div>
          <div style="background:var(--bg-alt); padding: 30px; border-radius: 20px; border: 1px solid var(--border-soft);">
            <h3 style="margin-bottom:10px;">Ilham Zahid</h3>
            <p style="font-size:0.9rem; color:var(--text-light);">Master en Orthophonie — Marrakech. Cabinet à Dcheira Jihadia.</p>
          </div>
        </div>
      </header>

      <footer class="footer">
        <p>© 2026 Ilham Zahid — Orthophoniste à Agadir</p>
      </footer>
    </body>
    </html>
  `;

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}
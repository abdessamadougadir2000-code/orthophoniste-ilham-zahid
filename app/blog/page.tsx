"use client";

import React from 'react';

export default function BlogPage() {
  const blogHtml = String.raw`
<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blog - Conseils en Orthophonie | Ilham Zahid</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  :root { --primary: #0c6e5f; --dark: #1a2332; --text: #2d3748; --bg: #f8fafb; }
  body { font-family: 'Inter', sans-serif; margin: 0; background: var(--bg); color: var(--text); }
  .navbar { background: #fff; padding: 0 5%; height: 68px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top:0; z-index:100; }
  .nav-brand { font-weight: 700; color: var(--dark); text-decoration: none; }
  .container { max-width: 800px; margin: 60px auto; padding: 0 20px; }
  .btn-back { color: var(--primary); text-decoration: none; font-weight: 600; display: inline-block; margin-bottom: 30px; }
  h1 { font-size: 2.5rem; color: var(--dark); margin-bottom: 40px; }
  
  .article-link { text-decoration: none; color: inherit; display: block; margin-bottom: 25px; }
  .card { background: #fff; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border-left: 5px solid var(--primary); transition: transform 0.3s; }
  .article-link:hover .card { transform: translateY(-5px); }
  
  .date { color: var(--primary); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; }
  h2 { margin: 10px 0; font-size: 1.4rem; color: var(--dark); }
  p { color: #64748b; line-height: 1.6; }
</style>
</head>
<body>
  <nav class="navbar">
    <a href="/" class="nav-brand">Ilham Zahid — Orthophoniste</a>
    <a href="/" style="text-decoration:none; color:var(--primary); font-weight:600;">Accueil</a>
  </nav>

  <div class="container">
    <a href="/" class="btn-back">← Retour à l'accueil</a>
    <h1>Articles & Conseils</h1>

    <a href="/article/depistage-precoce" class="article-link">
      <article class="card">
        <span class="date">5 Avril 2026</span>
        <h2>L'importance du dépistage précoce</h2>
        <p>Découvrez pourquoi une intervention rapide peut faire toute la différence dans le développement du langage chez l'enfant...</p>
      </article>
    </a>

    <a href="/article/conseils-begaiement" class="article-link">
      <article class="card">
        <span class="date">28 Mars 2026</span>
        <h2>Conseils pour le bégaiement</h2>
        <p>Comment accompagner son enfant au quotidien ? Voici quelques pistes pour favoriser une communication sereine à la maison.</p>
      </article>
    </a>
  </div>
</body>
</html>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: blogHtml }} />
  );
}
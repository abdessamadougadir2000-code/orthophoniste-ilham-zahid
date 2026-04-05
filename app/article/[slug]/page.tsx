"use client";

import React from 'react';
import { useParams } from 'next/navigation';

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;

  const getArticle = () => {
    if (slug === 'depistage-precoce') {
      return { title: "L'importance du dépistage précoce", text: "Le dépistage précoce est la clé d'une rééducation réussie..." };
    }
    if (slug === 'conseils-begaiement') {
      return { title: "Conseils pour le bégaiement", text: "Voici comment réagir face aux blocages de votre enfant..." };
    }
    return { title: "Article non trouvé", text: "Désolé, ce contenu n'existe pas." };
  };

  const article = getArticle();

  return (
    <div style={{ padding: '60px 5%', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <a href="/blog" style={{ color: '#0c6e5f', textDecoration: 'none', fontWeight: 'bold' }}>← Retour au blog</a>
      <h1 style={{ color: '#1a2332', fontSize: '2.5rem', marginTop: '20px' }}>{article.title}</h1>
      <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#4a5568', marginTop: '30px' }}>{article.text}</div>
    </div>
  );
}
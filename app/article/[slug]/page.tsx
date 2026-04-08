"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from "next-sanity";

// إعدادات الاتصال بـ Sanity ديالك
const client = createClient({
  projectId: "77k3g7b4",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // كنجبدو العناوين، الـ Slug، والتاريخ من Sanity
    const query = `*[_type == "article"] | order(_createdAt desc) {
      title,
      "slug": slug.current,
      _createdAt
    }`;

    client.fetch(query)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "80px 5%", maxWidth: "1000px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#1a2332", marginBottom: "40px", textAlign: "center" }}>
        Articles & Conseils
      </h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Chargement des articles...</p>
      ) : (
        <div style={{ display: "grid", gap: "30px" }}>
          {articles.map((article) => (
            <a 
              key={article.slug} 
              href={`/article/${article.slug}`}
              style={{ 
                display: "block", 
                padding: "30px", 
                background: "#fff", 
                borderRadius: "20px", 
                textDecoration: "none", 
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                borderLeft: "6px solid #0c6e5f",
                transition: "transform 0.2s"
              }}
            >
              <span style={{ color: "#0c6e5f", fontWeight: "bold", fontSize: "0.9rem" }}>
                {new Date(article._createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <h2 style={{ color: "#1a2332", margin: "15px 0", fontSize: "1.6rem" }}>{article.title}</h2>
              <p style={{ color: "#718096" }}>Cliquer pour lire l'article complet...</p>
            </a>
          ))}

          {articles.length === 0 && (
            <p style={{ textAlign: "center", color: "#718096" }}>Aucun article trouvé.</p>
          )}
        </div>
      )}
      
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="/" style={{ color: "#0c6e5f", fontWeight: "600", textDecoration: "none" }}>← Retour à l'accueil</a>
      </div>
    </div>
  );
}
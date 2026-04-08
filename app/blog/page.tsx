"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from "next-sanity";

// إعدادات Sanity ديالك
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
    // كنجبدو المقالات الحقيقية من Sanity
    const query = `*[_type == "article"] | order(_createdAt desc) {
      title,
      "slug": slug.current,
      _createdAt,
      "description": array::join(string::split(pt::text(body), "")[0..150], "") + "..."
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
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8fafb", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={{ background: "#fff", padding: "0 5%", height: "68px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", position: "sticky", top: 0, zIndex: 100 }}>
        <a href="/" style={{ fontWeight: 700, color: "#1a2332", textDecoration: "none" }}>Ilham Zahid — Orthophoniste</a>
        <a href="/" style={{ textDecoration: "none", color: "#0c6e5f", fontWeight: 600 }}>Accueil</a>
      </nav>

      <div style={{ maxWidth: "800px", margin: "60px auto", padding: "0 20px" }}>
        <a href="/" style={{ color: "#0c6e5f", textDecoration: "none", fontWeiht: "600", display: "inline-block", marginBottom: "30px" }}>← Retour à l'accueil</a>
        
        <h1 style={{ fontSize: "2.5rem", color: "#1a2332", marginBottom: "40px" }}>Articles & Conseils</h1>

        {loading ? (
          <p>Chargement des articles...</p>
        ) : (
          <div>
            {articles.map((article) => (
              <a key={article.slug} href={`/article/${article.slug}`} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: "25px" }}>
                <article style={{ background: "#fff", padding: "30px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", borderLeft: "5px solid #0c6e5f" }}>
                  <span style={{ color: "#0c6e5f", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>
                    {new Date(article._createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <h2 style={{ margin: "10px 0", fontSize: "1.4rem", color: "#1a2332" }}>{article.title}</h2>
                  <p style={{ color: "#64748b", lineHeight: "1.6" }}>{article.description}</p>
                </article>
              </a>
            ))}

            {articles.length === 0 && (
              <p style={{ textAlign: "center", color: "#718096" }}>Aucun article trouvé dans Sanity.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
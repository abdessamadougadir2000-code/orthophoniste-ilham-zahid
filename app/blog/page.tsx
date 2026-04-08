"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from "next-sanity";

// حطينا الرقم ديريكت هنا باش نتفاداو المشكل ديال Vercel
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
    async function fetchArticles() {
      try {
        // كنجبدو أي حاجة نوعها article أو post
        const query = `*[_type in ["article", "post"]] | order(_createdAt desc) {
          title,
          "slug": slug.current,
          _createdAt
        }`;
        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error("Erreur Sanity:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px" }}>
      <nav style={{ background: "#fff", padding: "15px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <a href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332', fontSize: "1.2rem" }}>Ilham Zahid</a>
        <a href="/" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>Accueil</a>
      </nav>

      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#1a2332", marginBottom: "30px" }}>Articles & Conseils</h1>
        
        {loading ? (
          <p style={{ textAlign: "center" }}>Chargement des articles...</p>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            {articles.map((article) => (
              <a key={article.slug} href={`/article/${article.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={{ background: "#fff", padding: "25px", borderRadius: "15px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)", borderLeft: "6px solid #0c6e5f" }}>
                  <small style={{ color: "#0c6e5f", fontWeight: "bold" }}>
                    {new Date(article._createdAt).toLocaleDateString('fr-FR')}
                  </small>
                  <h2 style={{ margin: "10px 0", fontSize: "1.5rem" }}>{article.title}</h2>
                  <p style={{ color: "#718096", margin: 0 }}>Cliquer pour lire la suite...</p>
                </div>
              </a>
            ))}
            {articles.length === 0 && <p style={{ textAlign: "center", color: "#718096" }}>Aucun article trouvé.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
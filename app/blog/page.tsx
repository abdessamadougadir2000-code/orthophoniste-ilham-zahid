"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from "next-sanity";

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
    // كنجبدو المقالات بـ كود بسيط باش ما يوقعش Error
    client.fetch(`*[_type == "article"] | order(_createdAt desc)`)
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f8fafb", minHeight: "100vh" }}>
      <nav style={{ background: "#fff", padding: "15px 5%", display: "flex", justifyContent: "space-between", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <a href="/" style={{ fontWeight: "bold", textDecoration: "none", color: "#333" }}>Ilham Zahid</a>
        <a href="/" style={{ textDecoration: "none", color: "#0c6e5f" }}>Accueil</a>
      </nav>

      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <h1 style={{ color: "#1a2332" }}>Articles & Conseils</h1>
        
        {loading ? <p>Chargement...</p> : (
          <div>
            {articles.map((article: any) => (
              <a key={article.slug?.current} href={`/article/${article.slug?.current}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", borderLeft: "5px solid #0c6e5f", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
                  <h2 style={{ color: "#1a2332", margin: "0 0 10px 0" }}>{article.title}</h2>
                  <p style={{ color: "#666" }}>Cliquer pour lire l'article...</p>
                </div>
              </a>
            ))}
            {articles.length === 0 && <p>Aucun article trouvé.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
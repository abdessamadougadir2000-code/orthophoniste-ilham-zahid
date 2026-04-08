"use client";

import React, { useEffect, useState } from 'react';
import { createClient } from "next-sanity";

// --- إعدادات Sanity ---
const client = createClient({
  projectId: "77k3g7b4",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false, // false باش يقرأ الداتا الجديدة مباشرة
});

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // كنقلبو على أي حاجة نوعها article أو post باش نضمنو ظهور مقالك
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
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px" }}>
      {/* Navbar */}
      <nav style={{ background: "#fff", padding: "15px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <a href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332', fontSize: "1.2rem" }}>Ilham Zahid</a>
        <a href="/" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>Accueil</a>
      </nav>

      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#1a2332", marginBottom: "30px" }}>Articles & Conseils</h1>
        
        {loading ? (
          <div style={{ textAlign: "center", padding: "50px" }}>
            <p>Chargement des articles...</p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: "20px" }}>
            {articles.map((article) => (
              <a 
                key={article.slug} 
                href={`/article/${article.slug}`} 
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ 
                  background: "#fff", 
                  padding: "25px", 
                  borderRadius: "15px", 
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)", 
                  borderLeft: "6px solid #0c6e5f",
                  transition: "transform 0.2s"
                }}>
                  <span style={{ color: "#0c6e5f", fontSize: "0.85rem", fontWeight: 700 }}>
                    {new Date(article._createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <h2 style={{ margin: "10px 0", fontSize: "1.5rem", color: "#1a2332" }}>{article.title}</h2>
                  <p style={{ color: "#718096", margin: 0 }}>Cliquer pour lire la suite...</p>
                </div>
              </a>
            ))}

            {articles.length === 0 && (
              <div style={{ textAlign: "center", padding: "40px", background: "#fff", borderRadius: "15px" }}>
                <p style={{ color: "#718096", fontSize: "1.1rem" }}>⚠️ Aucun article trouvé dans Sanity.</p>
                <p style={{ fontSize: "0.9rem" }}>تأكد بلي درتي <strong>Publish</strong> للمقال فـ Sanity Studio.</p>
              </div>
            )}
          </div>
        )}

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a href="/" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>← Retour à l'accueil</a>
        </div>
      </div>
    </div>
  );
}
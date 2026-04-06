"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

// 🔗 الربط الحقيقي بـ المعلومات ديالك (brkysa43)
const client = createClient({
  projectId: "brkysa43", 
  dataset: "production",
  apiVersion: "2024-04-06",
  useCdn: false,
  // ✅ الـ Token المصحح من الصورة ديالك
  token: "sks3m19CPgUSuaMw9wK4MfdPN0w8f12FfAdrHvIzby3rEHmUwX8hkExf9WS2YIRuhVf0cxjpmO2q75uklKzcpUw15tqJLgchuIiKMhWU3inIElj5Wm7xlqDklQ58VgS3aOOjIBLTSY6aJndKSZdF5xgogNbdx2uFAXElq9gj47mFMy58zatb",
});

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getArticle() {
      if (!slug) return;
      
      try {
        // 🔍 كنجربو نجبدو المقال بـ كاع السميات الممكنة
        const data = await client.fetch(
          `*[_type in ["post", "article", "blogPost"] && slug.current == $slug][0]{
            title,
            body,
            "category": categories[0]->title
          }`, 
          { slug }
        );

        if (!data) {
          setError("Aucun article trouvé avec ce slug.");
        } else {
          setArticle(data);
        }
      } catch (err: any) {
        console.error("Sanity Fetch Error:", err);
        setError("Erreur de connexion : " + err.message);
      } finally {
        setLoading(false);
      }
    }

    getArticle();
  }, [slug]);

  if (loading) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <p style={{fontSize: "1.2rem", color: "#0c6e5f"}}>Chargement de l'article...</p>
    </div>
  );

  if (error || !article) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <h2 style={{color: "#e53e3e"}}>Désolé ! {error || "Article introuvable"}</h2>
      <p>Slug : <strong>{slug}</strong></p>
      <a href="/blog" style={{color: "#0c6e5f", fontWeight: "bold", textDecoration: "none"}}>← Retour au blog</a>
    </div>
  );

  return (
    <div style={{background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px"}}>
      <nav style={{background: "#fff", padding: "15px 5%", boxShadow: "0 2px 10px rgba(0,0,0,0.05)"}}>
        <a href="/" style={{fontWeight: 700, textDecoration: 'none', color: '#1a2332'}}>Ilham Zahid — Orthophoniste</a>
      </nav>

      <div style={{maxWidth: "800px", margin: "50px auto", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 4px 25px rgba(0,0,0,0.05)", fontFamily: "sans-serif"}}>
        <a href="/blog" style={{color: "#0c6e5f", textDecoration: "none", fontWeight: "600", fontSize: "0.9rem"}}>← Retour au blog</a>
        
        <h1 style={{fontSize: "2.8rem", color: "#1a2332", marginTop: "20px", lineHeight: "1.2"}}>{article.title}</h1>
        
        <div style={{marginTop: "30px", lineHeight: "1.8", fontSize: "1.15rem", color: "#4a5568"}}>
          {/* ✅ هادا هو لّي غا يعرض الهضرة لّي كتبتِ بـ يديك فـ Sanity */}
          <PortableText value={article.body} />
        </div>

        <div style={{marginTop: "50px", borderTop: "1px solid #eee", paddingTop: "30px", textAlign: "center"}}>
          <p style={{marginBottom: "15px", fontWeight: 500}}>Une question ?</p>
          <a href="https://wa.me/212663036699" style={{background: "#25D366", color: "#fff", padding: "14px 30px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold", boxShadow: "0 4px 15px rgba(37,211,102,0.3)"}}>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
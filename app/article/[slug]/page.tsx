"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

// 🔗 الربط المباشر بـ Sanity (brkysa43)
const client = createClient({
  projectId: "brkysa43", 
  dataset: "production",
  apiVersion: "2023-05-03", // تاريخ مستقر
  useCdn: false,
  // ✅ الـ Token مأخوذ بدقة من الصورة ديالك
  token: "sks3m19CPgUSuaMw9wK4MfdPN0w8f12FfAdrHvIzby3rEHmUwX8hkExf9WS2YIRuhVf0cxjpmO2q75uklKzcpUw15tqJLgchuIiKMhWU3inIElj5Wm7xlqDklQ58VgS3aOOjIBLTSY6aJndKSZdF5xgogNbdx2uFAXElq9gj47mFMy58zatb",
});

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      
      try {
        console.log("🔍 جاري طلب المقال للـ slug:", slug);
        
        // كنقلبو فـ post أو article
        const query = `*[_type in ["post", "article"] && slug.current == $slug][0]{
          title,
          body,
          "category": categories[0]->title
        }`;

        const data = await client.fetch(query, { slug });
        console.log("✅ الداتا لي جات:", data);

        if (!data) {
          setErrorMsg("لم نجد مقال بهذا الـ Slug في Sanity Studio.");
        } else {
          setArticle(data);
        }
      } catch (err: any) {
        console.error("❌ Sanity Fetch Error:", err);
        setErrorMsg("مشكل في الاتصال: " + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <h2 style={{color: "#0c6e5f"}}>Chargement de l'article...</h2>
    </div>
  );

  if (errorMsg || !article) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <h2 style={{color: "#e53e3e"}}>⚠️ {errorMsg || "Article introuvable"}</h2>
      <p>Slug: <strong>{slug}</strong></p>
      <a href="/blog" style={{color: "#0c6e5f", fontWeight: "bold"}}>← Retour au blog</a>
    </div>
  );

  return (
    <div style={{background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px"}}>
      <nav style={{background: "#fff", padding: "15px 5%", boxShadow: "0 2px 10px rgba(0,0,0,0.05)"}}>
        <a href="/" style={{fontWeight: 700, textDecoration: 'none', color: '#1a2332'}}>Ilham Zahid — Orthophoniste</a>
      </nav>

      <div style={{maxWidth: "800px", margin: "50px auto", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 4px 25px rgba(0,0,0,0.05)", fontFamily: "sans-serif"}}>
        <a href="/blog" style={{color: "#0c6e5f", textDecoration: "none", fontWeight: "600"}}>← Retour au blog</a>
        
        <h1 style={{fontSize: "2.8rem", color: "#1a2332", marginTop: "20px", lineHeight: "1.2"}}>{article.title}</h1>
        
        <div style={{marginTop: "30px", lineHeight: "1.8", fontSize: "1.15rem", color: "#4a5568"}}>
          {article.body ? (
            <PortableText value={article.body} />
          ) : (
            <p>المحتوى فارغ في Sanity Studio.</p>
          )}
        </div>
      </div>
    </div>
  );
}
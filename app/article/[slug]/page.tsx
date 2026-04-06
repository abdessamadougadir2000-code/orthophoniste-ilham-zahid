"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

// 🔗 الربط الرسمي بـ المعلومات ديالك (brkysa43)
const client = createClient({
  projectId: "brkysa43", 
  dataset: "production",
  apiVersion: "2024-04-06",
  useCdn: false, // عطلنا الـ CDN باش نشوفو الجديد ديريكت
  token: "sks3m19CPgUSuaMw9wK4MfdPN0w8f12FfAdrHvIzby3rEHmUwX8hkExf9WS2YIRuhVf0cxjpmO2q75uklKzcpUw15tqJLgchuIiKMhWU3inIElj5Wm7xlqDklQ58VgS3aOOjIBLTSY6aJndKSZdF5xgogNbdx2uFAXElq9gj47mFMy58zatbmFMy58zatb",
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
        console.log("🔍 جاري البحث عن الـ slug:", slug);
        
        // 📝 هاد الـ Query غا يقلب فـ كاع أنواع المقالات الممكنة
        const data = await client.fetch(
          `*[_type in ["post", "article", "blogPost"] && slug.current == $slug][0]{
            title,
            body,
            "category": categories[0]->title
          }`, 
          { slug }
        );

        if (!data) {
          setError("المقال موجود فـ Sanity ولكن الـ Slug مكيطابقش.");
        } else {
          setArticle(data);
        }
      } catch (err: any) {
        console.error("❌ Sanity Error:", err);
        setError("مشكل فـ الاتصال بـ Sanity: " + err.message);
      } finally {
        setLoading(false);
      }
    }

    getArticle();
  }, [slug]);

  if (loading) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <p>Chargement du contenu depuis Sanity...</p>
      <small>إيلا تعطل هاد الميساج، كاين مشكل فـ الـ Token ولا الـ CORS</small>
    </div>
  );

  if (error || !article) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <h2 style={{color: "red"}}>Oups ! {error || "Article introuvable"}</h2>
      <p>Slug: <strong>{slug}</strong></p>
      <a href="/blog" style={{color: "#0c6e5f", fontWeight: "bold"}}>← Retour au blog</a>
    </div>
  );

  return (
    <div style={{maxWidth: "800px", margin: "50px auto", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 4px 25px rgba(0,0,0,0.05)", fontFamily: "sans-serif"}}>
      <a href="/blog" style={{color: "#0c6e5f", textDecoration: "none", fontWeight: "600"}}>← Retour au blog</a>
      
      <h1 style={{fontSize: "2.8rem", color: "#1a2332", marginTop: "20px", lineHeight: "1.2"}}>{article.title}</h1>
      
      <div style={{marginTop: "30px", lineHeight: "1.8", fontSize: "1.15rem", color: "#4a5568"}}>
        {/* ✅ عرض المحتوى الحقيقي من Sanity */}
        <PortableText value={article.body} />
      </div>

      <div style={{marginTop: "50px", borderTop: "1px solid #eee", paddingTop: "30px", textAlign: "center"}}>
        <a href="https://wa.me/212663036699" style={{background: "#25D366", color: "#fff", padding: "14px 30px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold"}}>
          Prendre RDV sur WhatsApp
        </a>
      </div>
    </div>
  );
}
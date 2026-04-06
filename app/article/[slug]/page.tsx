"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

// 🔗 الربط مع Sanity Studio ديالك
const client = createClient({
  projectId: "brkysa43", 
  dataset: "production",
  apiVersion: "2024-04-06",
  useCdn: false,
});

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // 🔍 كنجبدو المقال بـ الـ Slug من Sanity
      client
        .fetch(`*[_type in ["post", "article"] && slug.current == $slug][0]{
          title,
          body,
          "category": categories[0]->title,
          "mainImage": mainImage.asset->url
        }`, { slug })
        .then((data) => {
          setArticle(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching from Sanity:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>Chargement...</div>;

  if (!article) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <h1>Article introuvable</h1>
      <p>Slug: <strong>{slug}</strong></p>
      <a href="/blog" style={{color: "#0c6e5f"}}>Retour au blog</a>
    </div>
  );

  return (
    <>
      <style>{`
        :root { --primary: #0c6e5f; --dark: #1a2332; }
        body { font-family: 'Inter', sans-serif; margin: 0; background: #f8fafb; color: #2d3748; line-height: 1.8; }
        .navbar { background: #fff; padding: 0 5%; height: 68px; display: flex; align-items: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .container { max-width: 800px; margin: 50px auto; padding: 40px; background: #fff; border-radius: 20px; box-shadow: 0 4px 25px rgba(0,0,0,0.04); }
        .btn-back { color: var(--primary); text-decoration: none; font-weight: 600; display: inline-block; margin-bottom: 30px; }
        h1 { font-size: 2.8rem; color: var(--dark); line-height: 1.2; margin-bottom: 30px; }
        .content { font-size: 1.15rem; color: #4a5568; }
        .content p { margin-bottom: 20px; }
      `}</style>

      <nav className="navbar">
        <a href="/" style={{fontWeight: 700, textDecoration: 'none', color: 'var(--dark)'}}>Ilham Zahid — Orthophoniste</a>
      </nav>

      <div className="container">
        <a href="/blog" className="btn-back">← Retour au blog</a>
        
        <h1>{article.title}</h1>
        
        <div className="content">
          {/* ✅ هادا هو لّي كيعرض "الهضرة" لّي مدخل فـ Sanity مقادة */}
          <PortableText value={article.body} />
        </div>

        <div style={{marginTop: "50px", borderTop: "1px solid #eee", paddingTop: "30px", textAlign: "center"}}>
          <a href="https://wa.me/212663036699" style={{background: "#25D366", color: "#fff", padding: "12px 30px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold"}}>
            Prendre RDV sur WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
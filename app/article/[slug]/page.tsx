"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

// الربط الرسمي مع المشروع ديالك
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
      // هاد الـ Query كيقلب فـ Sanity على المقال بـ الـ Slug
      // درت ليك post و article باش إيلا كنتي مسمي أي وحدة فيهم يلقاها
      client
        .fetch(`*[_type in ["post", "article"] && slug.current == $slug][0]{
          title,
          body,
          "category": categories[0]->title
        }`, { slug })
        .then((data) => {
          setArticle(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Sanity Error:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) return <div style={{padding: "100px", textAlign: "center"}}>Chargement...</div>;

  // إيلا مالقاش المقال فـ Sanity
  if (!article) return (
    <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>
      <h1>Article introuvable</h1>
      <p>Slug recherché: <strong>{slug}</strong></p>
      <p>تأكد أن الـ Slug في Sanity Studio مطابق تماماً لهذا النص.</p>
      <a href="/blog" style={{color: "#0c6e5f"}}>Retour au blog</a>
    </div>
  );

  return (
    <div style={{maxWidth: "800px", margin: "50px auto", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", fontFamily: "sans-serif"}}>
      <a href="/blog" style={{color: "#0c6e5f", textDecoration: "none", fontWeight: "600"}}>← Retour au blog</a>
      
      <h1 style={{fontSize: "2.5rem", color: "#1a2332", marginTop: "20px", lineHeight: "1.2"}}>
        {article.title}
      </h1>
      
      <div style={{marginTop: "30px", lineHeight: "1.8", fontSize: "1.15rem", color: "#4a5568"}}>
        {/* هاد المكون هو لّي كيحول "البلوكات" ديال Sanity لهضرة مقادة */}
        <PortableText value={article.body} />
      </div>

      <div style={{marginTop: "50px", paddingTop: "30px", borderTop: "1px solid #eee", textAlign: "center"}}>
        <p style={{marginBottom: "15px"}}>Besoin d'un conseil ?</p>
        <a href="https://wa.me/212663036699" style={{background: "#25D366", color: "#fff", padding: "12px 25px", borderRadius: "10px", textDecoration: "none", fontWeight: "bold"}}>WhatsApp</a>
      </div>
    </div>
  );
}
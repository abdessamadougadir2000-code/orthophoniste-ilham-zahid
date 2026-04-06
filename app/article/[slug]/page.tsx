"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

// --- الإعدادات الصحيحة بـ Project ID ديالك ---
const client = createClient({
  projectId: "77k3g7b4", // الرقم اللي فـ الصورة ديالك
  dataset: "production",
  apiVersion: "2023-05-03", 
  useCdn: true, // باش يكون السيت سريع
});

// محرك الصور باش يبانو بـ جودة عالية
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      try {
        // Query كتجبد العنوان، المحتوى، والتصويرة
        const query = `*[_type in ["post", "article"] && slug.current == $slug][0]{ 
          title, 
          body,
          mainImage 
        }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (err) { 
        console.error("Sanity Error:", err); 
      } finally { 
        setLoading(false); 
      }
    }
    fetchData();
  }, [slug]);

  // حالة التحميل
  if (loading) return (
    <div style={{ padding: "100px", textAlign: "center", fontFamily: "sans-serif", color: "#0c6e5f" }}>
      <h2>Chargement de l'article...</h2>
    </div>
  );

  // حالة مالقاش المقال
  if (!article) return (
    <div style={{ padding: "100px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h2 style={{ color: "#e53e3e" }}>⚠️ المقال غير موجود</h2>
      <p>Slug recherché : <strong>{slug}</strong></p>
      <p style={{ color: "#718096" }}>تأكد بلي الـ Slug فـ Sanity هو بـ الضبط هاد الكلمة لّي فوق.</p>
      <a href="/blog" style={{ color: "#0c6e5f", fontWeight: "bold" }}>الرجوع لـ المدونة</a>
    </div>
  );

  return (
    <div style={{ background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px" }}>
      {/* Header بسيط */}
      <nav style={{ background: "#fff", padding: "15px 5%", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332', fontSize: "1.2rem" }}>Ilham Zahid</a>
        <span style={{ color: "#0c6e5f", fontWeight: 600 }}>Orthophoniste</span>
      </nav>

      <article style={{ maxWidth: "850px", margin: "40px auto", padding: "40px", background: "#fff", borderRadius: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
        <a href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600, display: "block", marginBottom: "20px" }}>← Retour</a>
        
        {/* عرض الصورة الرئيسية */}
        {article.mainImage && (
          <img 
            src={urlFor(article.mainImage).url()} 
            alt={article.title}
            style={{ width: "100%", height: "450px", objectFit: "cover", borderRadius: "20px", marginBottom: "30px" }}
          />
        )}

        <h1 style={{ fontSize: "2.8rem", color: "#1a2332", marginBottom: "25px", lineHeight: "1.2", fontWeight: 800 }}>
          {article.title}
        </h1>
        
        {/* محتوى المقال */}
        <div style={{ lineHeight: "1.8", color: "#2d3748", fontSize: "1.2rem", fontFamily: "Georgia, serif" }}>
          <PortableText value={article.body} />
        </div>
      </article>
    </div>
  );
}
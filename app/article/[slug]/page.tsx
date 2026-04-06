"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: "brkysa43", 
  dataset: "production",
  apiVersion: "2023-05-03", 
  useCdn: true, // رديناها true باش يكون السيت سريع مادام المقال Publish
});

// محرك روابط الصور
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
        // زدنا "mainImage" فـ الطلب باش نجيبو التصويرة
        const query = `*[_type in ["post", "article"] && slug.current == $slug][0]{ 
          title, 
          body,
          mainImage 
        }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    }
    fetchData();
  }, [slug]);

  if (loading) return <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>Chargement de l'article...</div>;
  if (!article) return <div style={{padding: "100px", textAlign: "center", fontFamily: "sans-serif"}}>Article introuvable.</div>;

  return (
    <div style={{ background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px" }}>
      <nav style={{ background: "#fff", padding: "15px 5%", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <a href="/" style={{ fontWeight: 700, textDecoration: 'none', color: '#1a2332' }}>Ilham Zahid — Orthophoniste</a>
      </nav>

      <article style={{ maxWidth: "800px", margin: "40px auto", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <a href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>← Retour au blog</a>
        
        {/* عرض التصويرة إيلا كانت موجودة */}
        {article.mainImage && (
          <img 
            src={urlFor(article.mainImage).url()} 
            alt={article.title}
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "15px", marginTop: "20px" }}
          />
        )}

        <h1 style={{ fontSize: "2.5rem", color: "#1a2332", margin: "30px 0 20px 0", lineHeight: "1.2" }}>{article.title}</h1>
        
        <div style={{ lineHeight: "1.8", color: "#4a5568", fontSize: "1.15rem", fontFamily: "serif" }}>
          <PortableText value={article.body} />
        </div>
      </article>
    </div>
  );
}
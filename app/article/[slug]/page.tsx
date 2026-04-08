"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

// الساروت والاتصال بـ Sanity
const client = createClient({
  projectId: "77k3g7b4", 
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

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
        // الاستعلام الجديد: كيقلب على أي حاجة عندها هاد الـ Slug بلا ما يهمو النوع
        const query = `*[slug.current == $slug][0]{
          title,
          body,
          mainImage,
          _createdAt
        }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (err) {
        console.error("Erreur fetching article:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontFamily: "sans-serif" }}>
        <p>Chargement de l'article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "100px", fontFamily: "sans-serif" }}>
        <h2 style={{ color: "#e53e3e" }}>⚠️ المقال غير موجود</h2>
        <p>Vérifiez le slug dans Sanity Studio et assurez-vous d'avoir cliqué sur <strong>Publish</strong>.</p>
        <a href="/blog" style={{ color: "#0c6e5f", fontWeight: "bold" }}>Retour à la liste</a>
      </div>
    );
  }

  return (
    <div style={{ background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px", fontFamily: "sans-serif" }}>
      {/* Navbar بسيطة */}
      <nav style={{ background: "#fff", padding: "15px 5%", display: "flex", justifyContent: "space-between", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <a href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332' }}>Ilham Zahid</a>
        <a href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>Blog</a>
      </nav>

      <article style={{ maxWidth: "800px", margin: "40px auto", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
        <a href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600, display: "block", marginBottom: "20px" }}>← Retour aux articles</a>
        
        {article.mainImage && (
          <img 
            src={urlFor(article.mainImage).url()} 
            style={{ width: "100%", borderRadius: "15px", marginBottom: "30px", objectFit: "cover", maxHeight: "400px" }} 
            alt={article.title} 
          />
        )}

        <h1 style={{ fontSize: "2.5rem", color: "#1a2332", marginBottom: "10px", lineHeight: "1.2" }}>
          {article.title}
        </h1>
        
        <p style={{ color: "#718096", fontSize: "0.9rem", marginBottom: "30px" }}>
          Publié le {new Date(article._createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div style={{ lineHeight: "1.8", color: "#2d3748", fontSize: "1.15rem" }}>
          <PortableText value={article.body} />
        </div>
      </article>
      
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="/" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>← Retour à l'accueil</a>
      </div>
    </div>
  );
}
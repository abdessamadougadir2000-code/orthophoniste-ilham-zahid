"use client";

// السطر السحري اللي غايحل المشكل
export const dynamic = 'force-dynamic'; 

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: "77k3g7b4", 
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) { return builder.image(source); }

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      try {
        const query = `*[slug.current == $slug][0]{
          title,
          body,
          mainImage,
          _createdAt
        }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <p>Chargement de l'article en cours...</p>
    </div>
  );

  if (!article) return (
    <div style={{ textAlign: 'center', padding: '100px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#e53e3e' }}>⚠️ Article introuvable</h1>
      <p style={{ margin: "20px 0", color: "#666" }}>Désolé, nous n'avons pas pu charger cet article.</p>
      <button 
        onClick={() => router.push('/blog')} 
        style={{ background: '#0c6e5f', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
      >
        Retour au Blog
      </button>
    </div>
  );

  return (
    <div style={{ background: "#fdfdfd", minHeight: "100vh", paddingBottom: "80px", fontFamily: "sans-serif" }}>
      <nav style={{ background: "#fff", padding: "15px 10%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee", position: 'sticky', top: 0, zIndex: 10 }}>
        <a href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332', fontSize: '1.2rem' }}>Ilham Zahid</a>
        <a href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>Blog</a>
      </nav>

      <div style={{ maxWidth: "850px", margin: "0 auto", padding: "0 20px" }}>
        <button onClick={() => router.push('/blog')} style={{ background: 'none', border: 'none', color: '#0c6e5f', fontWeight: '600', cursor: 'pointer', marginTop: '30px', padding: 0 }}>
          ← Tous les articles
        </button>

        <header style={{ marginTop: '40px' }}>
          <h1 style={{ fontSize: "2.8rem", color: "#1a2332", marginBottom: "20px", lineHeight: "1.2", letterSpacing: "-0.02em" }}>{article.title}</h1>
          <p style={{ color: "#718096" }}>
            Publié le {new Date(article._createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </header>

        {article.mainImage && (
          <div style={{ margin: "40px 0", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            <img src={urlFor(article.mainImage).url()} style={{ width: "100%", display: 'block', maxHeight: '500px', objectFit: 'cover' }} alt={article.title} />
          </div>
        )}

        <div style={{ lineHeight: "1.8", color: "#2d3748", fontSize: "1.2rem", background: "#fff", padding: "40px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}>
          <PortableText value={article.body} />
        </div>
      </div>
    </div>
  );
}
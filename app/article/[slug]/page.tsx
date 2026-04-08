"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: "77k3g7b4", // نفس الرقم هنا
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) { return builder.image(source); }

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      try {
        const query = `*[_type in ["article", "post"] && slug.current == $slug][0]{ title, body, mainImage }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (err) { console.error(err); } finally { setLoading(false); }
    }
    fetchData();
  }, [slug]);

  if (loading) return <div style={{ textAlign: "center", padding: "100px" }}>Chargement...</div>;
  if (!article) return <div style={{ textAlign: "center", padding: "100px" }}>⚠️ المقال غير موجود</div>;

  return (
    <div style={{ background: "#f8fafb", minHeight: "100vh", paddingBottom: "50px" }}>
      <nav style={{ background: "#fff", padding: "15px 5%", display: "flex", justifyContent: "space-between", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <a href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332' }}>Ilham Zahid</a>
      </nav>

      <article style={{ maxWidth: "800px", margin: "40px auto", padding: "40px", background: "#fff", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
        <a href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>← Retour au Blog</a>
        {article.mainImage && (
          <img src={urlFor(article.mainImage).url()} style={{ width: "100%", borderRadius: "15px", margin: "30px 0" }} alt="" />
        )}
        <h1 style={{ fontSize: "2.5rem", color: "#1a2332" }}>{article.title}</h1>
        <div style={{ lineHeight: "1.8", color: "#2d3748", fontSize: "1.1rem" }}>
          <PortableText value={article.body} />
        </div>
      </article>
    </div>
  );
}
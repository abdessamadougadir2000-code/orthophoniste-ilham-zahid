"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

const client = createClient({
  projectId: "brkysa43", 
  dataset: "production",
  apiVersion: "2023-05-03", 
  useCdn: false,
  token: "sks3m19CPgUSuaMw9wK4MfdPN0w8f12FfAdrHvIzby3rEHmUwX8hkExf9WS2YIRuhVf0cxjpmO2q75uklKzcpUw15tqJLgchuIiKMhWU3inIElj5Wm7xlqDklQ58VgS3aOOjIBLTSY6aJndKSZdF5xgogNbdx2uFAXElq9gj47mFMy58zatb",
});

export default function ArticlePage() {
  const params = useParams();
  const slug = params?.slug;
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      try {
        const query = `*[_type in ["post", "article"] && slug.current == $slug][0]{ title, body }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    }
    fetchData();
  }, [slug]);

  if (loading) return <div style={{padding: "50px", textAlign: "center"}}>Chargement...</div>;
  if (!article) return <div style={{padding: "50px", textAlign: "center"}}>Article introuvable.</div>;

  return (
    <div style={{ background: "#f8fafb", minHeight: "100vh" }}>
      <nav style={{ background: "#fff", padding: "15px 5%", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <a href="/" style={{ fontWeight: 700, textDecoration: 'none', color: '#1a2332' }}>Ilham Zahid</a>
      </nav>
      <article style={{ maxWidth: "800px", margin: "40px auto", padding: "40px", background: "#fff", borderRadius: "20px" }}>
        <a href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>← Retour</a>
        <h1 style={{ fontSize: "2.5rem", color: "#1a2332", margin: "20px 0" }}>{article.title}</h1>
        <div style={{ lineHeight: "1.8", color: "#4a5568", fontSize: "1.1rem" }}>
          <PortableText value={article.body} />
        </div>
      </article>
    </div>
  );
}
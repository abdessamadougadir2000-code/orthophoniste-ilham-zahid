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
  useCdn: false, // رديناها false باش يجيب أحدث داتا بلا Cache
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
        // Query كتجبد المقال بـ الـ slug
        const query = `*[_type in ["post", "article"] && slug.current == $slug][0]{ 
          title, body, mainImage 
        }`;
        const data = await client.fetch(query, { slug });
        setArticle(data);
      } catch (err) { console.error("Error Sanity:", err); }
      finally { setLoading(false); }
    }
    fetchData();
  }, [slug]);

  if (loading) return <div style={{padding: "100px", textAlign: "center"}}>Chargement en cours...</div>;
  
  if (!article) return (
    <div style={{padding: "100px", textAlign: "center"}}>
      <h2 style={{color: "red"}}>⚠️ Article introuvable</h2>
      <p>Veuillez vérifier le Slug dans Sanity : <strong>{slug}</strong></p>
      <a href="/blog">Retour</a>
    </div>
  );

  return (
    <div style={{ background: "#f8fafb", minHeight: "100vh", padding: "20px" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "40px", borderRadius: "20px" }}>
        {article.mainImage && (
          <img src={urlFor(article.mainImage).url()} style={{ width: "100%", borderRadius: "15px" }} />
        )}
        <h1 style={{ fontSize: "2.5rem", marginTop: "20px" }}>{article.title}</h1>
        <div style={{ marginTop: "30px", lineHeight: "1.8" }}>
          <PortableText value={article.body} />
        </div>
      </article>
    </div>
  );
}
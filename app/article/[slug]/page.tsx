"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "77k3g7b4",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // كنجبدو كاع المقالات من نوع article
    client.fetch(`*[_type == "article"]{ title, slug, "date": _createdAt }`)
      .then(data => setPosts(data));
  }, []);

  return (
    <div style={{ padding: "50px 5%" }}>
      <h1>Articles & Conseils</h1>
      <div style={{ display: "grid", gap: "20px" }}>
        {posts.map((post) => (
          <a key={post.slug.current} href={`/article/${post.slug.current}`} style={{ 
            padding: "20px", background: "#fff", borderRadius: "15px", display: "block", textDecoration: "none", color: "inherit", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" 
          }}>
            <small style={{ color: "#0c6e5f" }}>{new Date(post.date).toLocaleDateString()}</small>
            <h2 style={{ margin: "10px 0" }}>{post.title}</h2>
            <p>Cliquez pour lire la suite...</p>
          </a>
        ))}
        {posts.length === 0 && <p>Aucun article trouvé pour le moment.</p>}
      </div>
    </div>
  );
}
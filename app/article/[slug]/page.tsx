import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import createImageUrlBuilder from '@sanity/image-url'; 
import Link from 'next/link';

// إعدادات لفرض جلب البيانات الحية ومنع الذاكرة المؤقتة (Cache)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const client = createClient({
  projectId: "77k3g7b4",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);
function urlFor(source: any) { return builder.image(source); }

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  // 1. فك الـ params باستعمال await (ضروري لـ Next.js 15)
  const resolvedParams = await props.params;
  const slugValue = resolvedParams?.slug;

  if (!slugValue) {
    return <div style={{ textAlign: 'center', padding: '100px' }}>Slug missing</div>;
  }

  try {
    // 2. الـ Query بـ الطريقة المباشرة لـ تفادي GROQ error اللي فـ الـ Logs
    // لاحظ أننا حطينا ${slugValue} وسط الأقواس المائلة ``
    const article = await client.fetch(
      `*[slug.current == "${slugValue}"][0]{
        title,
        body,
        mainImage,
        _createdAt
      }`
    );

    if (!article) {
      return (
        <div style={{ textAlign: 'center', padding: '100px', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#e53e3e' }}>⚠️ Article introuvable</h1>
          <p style={{ margin: '15px 0', color: '#666' }}>L'article "{slugValue}" n'existe pas encore.</p>
          <Link href="/blog" style={{ color: '#0c6e5f', fontWeight: 'bold' }}>Retour au Blog</Link>
        </div>
      );
    }

    return (
      <div style={{ background: "#fdfdfd", minHeight: "100vh", paddingBottom: "80px", fontFamily: 'sans-serif' }}>
        {/* Navbar */}
        <nav style={{ background: "#fff", padding: "15px 10%", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #eee" }}>
          <Link href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332' }}>Ilham Zahid</Link>
          <Link href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>Blog</Link>
        </nav>

        <article style={{ maxWidth: "850px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ marginTop: '30px' }}>
            <Link href="/blog" style={{ color: '#0c6e5f', textDecoration: 'none', fontWeight: 600 }}>← Tous les articles</Link>
          </div>

          <header style={{ marginTop: '40px' }}>
            <h1 style={{ fontSize: "2.8rem", color: "#1a2332", marginBottom: "20px", lineHeight: "1.2" }}>
              {article.title}
            </h1>
            <p style={{ color: "#718096" }}>
              Publié le {new Date(article._createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </header>

          {article.mainImage && (
            <div style={{ margin: "40px 0", borderRadius: "24px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <img 
                src={urlFor(article.mainImage).url()} 
                style={{ width: "100%", display: 'block', maxHeight: '500px', objectFit: 'cover' }} 
                alt={article.title} 
              />
            </div>
          )}

          <div style={{ 
            lineHeight: "1.8", 
            color: "#2d3748", 
            fontSize: "1.2rem", 
            background: "#fff", 
            padding: "40px", 
            borderRadius: "20px", 
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)" 
          }}>
            <PortableText value={article.body} />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error("Critical Error:", error);
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h2>Une erreur technique est survenue.</h2>
        <Link href="/blog">Retour au Blog</Link>
      </div>
    );
  }
}
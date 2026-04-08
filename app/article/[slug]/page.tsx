import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

// هاد الأسطر ضرورية باش السيت ديما يجيب الجديد من Sanity فـ البلاصة
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const client = createClient({
  projectId: "77k3g7b4",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false, // تعطيل الـ CDN لضمان جلب أحدث نسخة
});

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // استعلام (Query) كيجيب المقال بـ الـ Slug كيفما كان نوعه
  const query = `*[slug.current == $slug][0]{
    title,
    body,
    mainImage,
    _createdAt
  }`;

  // طلب الداتا مع منع الـ Caching
  const article = await client.fetch(query, { slug }, { cache: 'no-store' });

  // إيلا مالقاش المقال غايبان هاد الميساج
  if (!article) {
    return (
      <div style={{ textAlign: 'center', padding: '100px', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#e53e3e' }}>⚠️ Article introuvable</h1>
        <p style={{ margin: '20px 0', color: '#666' }}>
          Désolé, nous n'avons pas pu trouver cet article. <br/>
          Assurez-vous qu'il est bien "Published" dans Sanity Studio.
        </p>
        <Link href="/blog" style={{ color: '#0c6e5f', fontWeight: 'bold', textDecoration: 'underline' }}>
          Retour au Blog
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#fdfdfd", minHeight: "100vh", paddingBottom: "80px", fontFamily: "sans-serif" }}>
      {/* Header */}
      <nav style={{ background: "#fff", padding: "15px 10%", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
        <Link href="/" style={{ fontWeight: 800, textDecoration: 'none', color: '#1a2332', fontSize: '1.2rem' }}>Ilham Zahid</Link>
        <Link href="/blog" style={{ color: "#0c6e5f", textDecoration: "none", fontWeight: 600 }}>Blog</Link>
      </nav>

      <div style={{ maxWidth: "850px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ marginTop: '30px' }}>
            <Link href="/blog" style={{ color: '#0c6e5f', fontWeight: '600', textDecoration: 'none' }}>
            ← Tous les articles
            </Link>
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
          <div style={{ margin: "40px 0", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
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
      </div>
    </div>
  );
}
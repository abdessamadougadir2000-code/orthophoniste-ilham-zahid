import { createClient } from "next-sanity";
import Link from "next/link";

// 1. الربط مع Sanity (نفس الـ ID ديالك)
const client = createClient({
  projectId: "brkysa43",
  dataset: "production",
  apiVersion: "2024-04-04",
  useCdn: false,
});

export default async function BlogPage() {
  // 2. جلب المقالات
  const posts = await client.fetch(`*[_type == "post"] | order(_createdAt desc)`);

  return (
    <main style={{ padding: '40px 5%', fontFamily: 'sans-serif', backgroundColor: '#f8fafb', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* زر العودة للسيت الأصلي */}
        <Link href="/" style={{ color: '#0c6e5f', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ← RETOUR AU SITE OFFICIEL
        </Link>

        <div style={{ marginTop: '30px', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.8rem', color: '#1a2332', marginBottom: '10px' }}>
            Blog de <span style={{ color: '#0c6e5f' }}>l'Orthophoniste</span>
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Conseils, articles et informations sur l'orthophonie à Agadir.</p>
        </div>

        {/* عرض المقالات */}
        <div style={{ display: 'grid', gap: '20px' }}>
          {posts.map((post: any) => (
            <Link href={`/article/${post._id}`} key={post._id} style={{ textDecoration: 'none' }}>
              <div style={{ 
                padding: '30px', 
                backgroundColor: '#fff', 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s ease-in-out'
              }}>
                <h2 style={{ color: '#1a2332', margin: '0 0 12px 0', fontSize: '1.4rem' }}>{post.title}</h2>
                <div style={{ color: '#0c6e5f', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Lire l'article كامل <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
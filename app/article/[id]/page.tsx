import { createClient } from "next-sanity";
import Link from "next/link";

const client = createClient({
  projectId: "brkysa43",
  dataset: "production",
  apiVersion: "2024-04-04",
  useCdn: false,
});

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  const post = await client.fetch(`*[_type == "post" && _id == $id][0]{
    title,
    body,
    _createdAt,
    "imageUrl": mainImage.asset->url
  }`, { id: resolvedParams.id });

  if (!post) return <div style={{ padding: '50px', textAlign: 'center' }}>Article introuvable</div>;

  const textContent = post.body?.map((block: any) => 
    block.children?.map((child: any) => child.text).join('')
  ).join('\n\n');

  const datePublication = new Date(post._createdAt).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafb', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      
      {/* زر الرجوع للبلوغ */}
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '40px', paddingLeft: '20px' }}>
         <Link href="/" style={{ color: '#0c6e5f', fontWeight: 'bold', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ← RETOUR AU BLOG
        </Link>
      </div>
      
      <article style={{ maxWidth: '800px', margin: '24px auto', backgroundColor: '#ffffff', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
        
        <header style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
             <span style={{ backgroundColor: '#e8f5f2', color: '#0c6e5f', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: 'bold' }}>ORTHOPHONIE</span>
             <span style={{ color: '#64748b', fontSize: '12px' }}>{datePublication}</span>
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#1a2332', lineHeight: '1.2', margin: 0 }}>
            {post.title}
          </h1>
        </header>

        {post.imageUrl && (
          <div style={{ padding: '0 40px', marginBottom: '40px' }}>
            <img src={post.imageUrl} alt={post.title} style={{ width: '100%', borderRadius: '16px', maxHeight: '450px', objectFit: 'cover' }} />
          </div>
        )}
        
        <div style={{ padding: '0 40px 40px 40px', fontSize: '18px', lineHeight: '1.8', color: '#334155', whiteSpace: 'pre-wrap' }}>
          {textContent}
        </div>

        <footer style={{ padding: '40px', backgroundColor: '#fcfdfe', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '64px', height: '64px', backgroundColor: '#0c6e5f', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '24px', flexShrink: 0 }}>
              IZ
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px 0', fontWeight: '800', color: '#1a2332', fontSize: '20px' }}>Zahid Ilham</h3>
              <p style={{ margin: '0 0 8px 0', color: '#0c6e5f', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase' }}>Cadre de santé • Orthophoniste</p>
            </div>
          </div>

          {/* 🎯 الرابط اللي طلبتي: كيدي ديريكت لصفحة التواصل فالموقع الرسمي */}
          <div style={{ marginTop: '30px' }}>
            <a 
              href="https://orthophoniste-zahid-ilham.vercel.app/#contact" 
              style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                width: '100%', backgroundColor: '#0c6e5f', color: '#ffffff', 
                fontWeight: 'bold', padding: '18px', borderRadius: '12px', 
                textDecoration: 'none', fontSize: '16px', textAlign: 'center',
                boxShadow: '0 4px 15px rgba(12,110,95,0.2)'
              }}
            >
               CONSULTER L'ORTHOPHONISTE
            </a>
          </div>
        </footer>

      </article>
    </main>
  );
}
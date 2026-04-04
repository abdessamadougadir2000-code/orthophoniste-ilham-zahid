import { createClient } from "next-sanity";
import Link from "next/link";

// إعدادات الاتصال بقاعدة البيانات
const client = createClient({
  projectId: "brkysa43",
  dataset: "production",
  apiVersion: "2024-04-04",
  useCdn: false,
});

export default async function Home() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return (
    <main className="min-h-screen p-10 bg-[#ffffff] text-[#2d3748]">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0c6e5f] bg-[#e8f5f2] px-3 py-1 rounded-full mb-3 border border-[#0c6e5f]/10">
            Derniers Articles
          </span>
          <h1 className="text-4xl font-bold text-[#1a2332]">
            Blog de <span className="text-[#0c6e5f]">l'Orthophoniste</span>
          </h1>
        </div>
        
        <div className="grid gap-6">
          {posts.map((post: any) => (
            // هنا زدنا الرابط اللي كايدي للصفحة ديال المقال
            <Link href={`/article/${post._id}`} key={post._id} className="block">
              <div className="p-6 border border-[#e2e8f0] rounded-[14px] bg-[#f8fafb] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0c6e5f] to-[#d4a847] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                
                <h2 className="text-xl font-bold text-[#1a2332] mb-2">{post.title}</h2>
                
                <div className="inline-flex items-center gap-2 text-[#0c6e5f] font-semibold text-sm mt-4">
                  Lire la suite
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
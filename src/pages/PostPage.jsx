import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { posts } from "../data/posts";
import { trendingPosts as posts } from "../data/trendingPosts";


export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <h2 className="text-center mt-20">Post not found</h2>;

  // Remove current post from "Recent Articles"
  const recentPosts = posts.filter(p => p.slug !== slug).slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      
      <h1 className="text-3xl font-bold text-center">{post.title}</h1>

      <span className="mt-4 px-4 py-1 bg-indigo-200 text-indigo-700 
                      rounded-full block w-fit mx-auto">
        {post.category}
      </span>

     <img
  src={post.image}
  alt={post.title}
  loading="lazy"
  width="800"
  height="500"
  className="mt-6 mx-auto rounded-2xl w-full max-w-3xl object-contain"
  style={{ maxHeight: "420px" }}
/>



      <div className="mt-8 leading-7 whitespace-pre-line text-lg">
        {post.content}
      </div>

      <h2 className="mt-12 text-2xl font-semibold">Recent articles</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {recentPosts.map(p => (
          <Link 
            key={p.id} 
            to={`/post/${p.slug}`} 
            className="block border rounded-lg p-3 hover:shadow-lg transition"
          >
            <img 
              src={p.image} 
              alt={p.title} 
              loading="lazy"
              className="rounded-md h-40 w-full object-cover" 
            />
            <p className="mt-2 font-semibold">{p.title}</p>
            <span className="text-sm">{p.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

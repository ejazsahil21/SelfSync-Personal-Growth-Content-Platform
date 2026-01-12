import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.slug}`}>
      <div className="bg-slate-800 dark:bg-slate-900 rounded-xl border border-slate-600 overflow-hidden hover:scale-[1.01] transition">
        <img src={post.image} className="w-full h-60 object-cover" />

        <div className="p-4">
          <p className="text-indigo-300 text-sm">{post.category}</p>
          <h3 className="text-lg font-semibold mt-1">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

import { useState } from "react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function Feed({ search }) {

  const [query, setQuery] = useState("");

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(
      (query || search || "").toLowerCase()
    )
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Community Feed</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => <PostCard key={p.id} post={p} />)}
      </div>
    </div>
  );
}

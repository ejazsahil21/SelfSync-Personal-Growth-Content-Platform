import PostCard from "../components/PostCard";
import { trendingPosts } from "../data/trendingPosts";

export default function PostsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      
      <h2 className="text-center text-2xl font-bold text-white mb-6">
        Trending Posts
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trendingPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

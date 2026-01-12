export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT — TEXT */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Want to grow? <br />
          Let <span className="text-indigo-400">SelfSync</span> guide you.
        </h1>

        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Discover inspiring stories, practical lessons, and real-world
          experiences from people who turned challenges into success.
          Learn, apply, and elevate your journey — one step at a time.
        </p>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
          alt="Team collaboration and growth"
          className="w-full max-w-md rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
}

import { useTheme } from "../theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  const handleSearchClick = () => {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  };

  return (
    <nav className="bg-slate-900 dark:bg-white dark:text-black text-white px-6 py-3 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          Self<span className="text-blue-400 dark:text-blue-600">Sync</span>
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search posts..."
            className="px-3 py-2 rounded-xl bg-slate-800 dark:bg-gray-200 outline-none text-sm w-52 md:w-64"
          />

          <button
            onClick={handleSearchClick}
            className="px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            🔍
          </button>
        </div>

        {/* Links + Theme */}
        <div className="flex gap-6 items-center text-sm font-semibold">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/feed" className="hover:text-blue-400">Feed</a>
          <a href="/profile" className="hover:text-blue-400">Profile</a>
          <a href="/resources" className="hover:text-blue-400">Resources</a>

          <a
            href="/sign-in"
            className="px-4 py-1 rounded-lg border border-blue-500 text-blue-500 font-semibold
                       hover:bg-blue-500 hover:text-white transition"
          >
            Sign In
          </a>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg border dark:border-gray-400 font-bold"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

      </div>
    </nav>
  );
}

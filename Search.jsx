import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Search() {
  const [params] = useSearchParams();
  const initialQuery = params.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [sort, setSort] = useState("latest");
  const [category, setCategory] = useState("all");

  return (
    <div className="flex gap-6 px-6 py-6 bg-gray-100 text-black dark:bg-slate-900 dark:text-white min-h-screen">

      {/* LEFT FILTERS */}
      <div className="w-64 border-r border-gray-300 dark:border-gray-700 pr-4">
        <label className="block mb-2 font-semibold">Search Term:</label>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded 
                     bg-white text-black 
                     dark:bg-slate-800 dark:text-white"
        />

        <label className="block mb-2 font-semibold">Sort:</label>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded 
                     bg-white text-black 
                     dark:bg-slate-800 dark:text-white"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>

        <label className="block mb-2 font-semibold">Category:</label>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded 
                     bg-white text-black 
                     dark:bg-slate-800 dark:text-white"
        >
          <option value="all">All</option>
          <option value="fitness">Fitness</option>
          <option value="nutrition">Nutrition</option>
          <option value="career">Career</option>
        </select>

        <button
          className="w-full py-2 rounded border border-blue-500 
                     text-blue-600 font-semibold
                     hover:bg-blue-500 hover:text-white transition"
        >
          Apply Filters
        </button>
      </div>

      {/* RIGHT RESULTS */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Posts results:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg overflow-hidden 
                          bg-white text-black 
                          dark:bg-slate-800 dark:text-white shadow">
            <img
              src="https://via.placeholder.com/400x200"
              alt="post"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">
                Decoding the JEE Exam: Tips for Success
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                career
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

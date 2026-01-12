import { Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Resources from "./pages/Resources";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search"; // ✅ NEW

export default function App() {
  return (
    <>
      <Navbar /> {/* ❌ remove onSearch */}

      <div className="min-h-screen">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/search" element={<Search />} /> {/* ✅ NEW */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

import { FaGithub, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t py-10 text-center opacity-90">
      <div className="flex gap-6 justify-center text-2xl">
        <a href="https://github.com/ejazsahil21" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/sah_ilspace_/" target="_blank"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/sahil-ejaz-27017a253/" target="_blank"><FaLinkedin /></a>
        <a href="https://yourwebsite.com" target="_blank"><FaGlobe /></a>
      </div>
    </footer>
  );
}

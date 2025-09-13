import { Link } from "react-router";
import data from "../data/blog.json";

export default function Footer() {
  // Comptage des catégories comme dans le header
  const categoryCountMap = data.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCountMap).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <footer className="bg-slate-900 text-white mt-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo et titre */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            TechBlog
          </h2>
          <p className="text-slate-400 text-sm">
            Le blog pour les passionnés de tech, développement et innovation.
          </p>
        </div>

        {/* Liens de navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-slate-300">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Catégories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Catégories</h3>
          <ul className="space-y-2 text-slate-300">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  to={`/blog?category=${category.name.toLowerCase()}`}
                  className="flex justify-between hover:text-blue-400 transition-colors"
                >
                  <span>{category.name}</span>
                  <span className="text-sm text-slate-500">
                    ({category.count})
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} TechBlog. Tous droits réservés.
      </div>
    </footer>
  );
}

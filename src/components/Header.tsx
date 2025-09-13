import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import data from "../data/blog.json";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calcul dynamique des catégories avec counts à partir de data
  const categoryCountMap = data.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(categoryCountMap).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex justify-between items-center h-16 w-240">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TechBlog
              </h1>
            </div>
          </div>

          {/* Navigation principale - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Accueil
              </Link>

              <Link to="/blog" className="hover:text-blue-400 font-medium">
                Blog
              </Link>

              {/* Dropdown Catégories */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center hover:text-blue-400 transition-colors font-medium"
                >
                  Catégories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
                    <div className="py-2">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          to={`/blog?category=${category.name.toLowerCase()}`}
                          className="flex items-center justify-between px-4 py-2 hover:bg-slate-700 transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-slate-400">
                            ({category.count})
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                À propos
              </Link>

              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-slate-700 font-medium"
            >
              Accueil
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md bg-slate-700 text-blue-400 font-medium"
            >
              Blog
            </Link>

            {/* Catégories mobiles */}
            <div className="px-3 py-2">
              <div className="text-slate-400 text-sm font-medium mb-2">
                Catégories
              </div>
              <div className="grid grid-cols-2 gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={`/blog?category=${category.name.toLowerCase()}`}
                    className="block px-2 py-1 rounded text-sm hover:bg-slate-700"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-slate-700 font-medium"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md hover:bg-slate-700 font-medium"
            >
              Contact
            </Link>

            {/* Recherche mobile */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

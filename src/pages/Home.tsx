import Blog from "@/components/Blog";
import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
import data from "../data/blog.json";
export default function Home() {
  const recentBlogs = data.filter((blog) => {
    const blogDate = new Date(blog.date);
    const today = new Date();
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(today.getDate() - 30);

    return blogDate >= fourteenDaysAgo && blogDate <= today;
  });

  recentBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const populaireBlog = data.filter((blog) => blog.vues >= 1000);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-4 py-10"
    >
      <section
        className="relative text-center mb-12 text-white h-[50vh] bg-cover flex flex-col justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 flex flex-col gap-5">
          <h1 className="text-4xl font-bold mb-4">Bienvenue sur TechBlog</h1>
          <p className="mb-6 max-w-xl mx-auto text-lg font-semibold">
            Découvrez les dernières actualités et tutoriels tech, développement,
            design, et plus.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition w-75 mx-auto"
          >
            Voir les Blog
          </Link>
        </div>
      </section>

      {/* Articles récents */}
      <section className="mb-12 text-white">
        <h2 className="font-bold text-3xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Articles récents
        </h2>
        <div className="flex gap-4 flex-wrap">
          {recentBlogs.map((blog, index) => (
            <div className="w-80" key={index}>
              <Blog
                id={blog.id}
                desc={blog.desc}
                title={blog.title}
                image={blog.image}
                date={blog.date}
                author={blog.author}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section>
        <h2 className="font-bold text-3xl mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Catégories populaires
        </h2>
        <div className="flex gap-4 flex-wrap">
          {populaireBlog.map((blog, index) => (
            <div key={index} className="w-80">
              <Blog
                id={blog.id}
                desc={blog.desc}
                title={blog.title}
                image={blog.image}
                date={blog.date}
                author={blog.author}
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

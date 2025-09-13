import * as motion from "motion/react-client";
import Blog from "../components/Blog";
import data from "../data/blog.json";
export default function Blogs() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <div className="text-white w-[1200px] mx-auto mt-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-center"
      >
        {["B", "l", "o", "g"].map((word, i) => (
          <motion.h1
            key={i}
            variants={item}
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center pb-10"
          >
            {word}
          </motion.h1>
        ))}
      </motion.div>

      <div className="flex gap-4 flex-wrap">
        {data.map((item, index) => (
          <div key={index}>
            <Blog
              id={item.id}
              title={item.title}
              desc={item.desc}
              image={item.image}
              author={item.author}
              date={item.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

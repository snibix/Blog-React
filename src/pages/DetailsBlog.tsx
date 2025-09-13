import { Link, useParams } from "react-router";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ChevronLeft } from "lucide-react";
import * as motion from "motion/react-client";
import blogs from "../data/blog.json";
export default function DetailsBlog() {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((blog) => blog.id === Number(id));
  return (
    <motion.article
      className="w-250 mx-auto bg-neutral-200 p-5 rounded "
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        <Link to="/blog" className="w-[5%]">
          <ChevronLeft size={50} className="text-gray-800" />
        </Link>
        <h2 className="text-4xl text-center py-10 text-bold w-[100%]">
          {blog?.title}
        </h2>
      </div>
      <div className="flex justify-end py-1 gap-1">
        <Badge className="bg-gray-800">{blog?.date}</Badge>
        {(blog?.vues ?? 0) >= 1000 ? <Badge>Populaires</Badge> : <span></span>}
      </div>
      <div>
        <img src={blog?.image} className="w-full h-130 mx-auto" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-5 py-5">
          <Avatar className="">
            <AvatarImage src={blog?.author.avatar} alt={blog?.author.name} />
            <AvatarFallback className="text-[15px] justify-center items-center flex">
              {blog?.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-2xl py-5">{blog?.author.name}</h3>
        </div>
        <p>{blog?.desc}</p>
      </div>
    </motion.article>
  );
}

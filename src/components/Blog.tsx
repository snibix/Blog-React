import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import * as motion from "motion/react-client";
import { Link } from "react-router";
import { Button } from "./ui/button";

type Props = {
  id: number;
  title: string;
  desc: string;
  image: string;
  date?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  category?: string;
  vues?: number;
};

export default function Blog({
  id,
  title,
  desc,
  image,
  date = "Mar 16, 2020",
  author = { name: "Author Name" },
  category,
}: Props) {
  return (
    <motion.article
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-sm mx-auto"
    >
      <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-0 h-70 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {category && (
          <Badge
            variant="secondary"
            className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white text-xs z-20"
          >
            {category}
          </Badge>
        )}

        <div className="relative z-10 h-full flex flex-col justify-between p-4 pb-0">
          <div></div>

          <div className="space-y-3 flex flex-col justify-end">
            <div className="flex items-center space-x-3 text-white/90">
              <div className="flex items-center space-x-1">
                <Avatar className="h-5 w-5">
                  <AvatarImage src={author.avatar} alt={author.name} />
                  <AvatarFallback className="text-[10px]">
                    {author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs font-medium">{author.name}</span>
              </div>

              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span className="text-xs font-medium">{date}</span>
              </div>
            </div>

            <CardTitle className="text-white text-base font-bold leading-tight group-hover:text-blue-200 transition-colors line-clamp-2">
              {title}
            </CardTitle>

            <CardDescription className="text-gray-200 text-sm line-clamp-2">
              {desc}
            </CardDescription>

            <Button
              size="sm"
              className="w-full bg-white text-black hover:bg-slate-800 transition-colors bg-gray-700 text-white"
            >
              <Link to={`/blog/${id}`} className="w-full ">
                Voir plus
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

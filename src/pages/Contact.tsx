import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as motion from "motion/react-client";

export default function Contact() {
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
    <motion.section
      className="text-white mx-auto w-250 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-center"
      >
        {[
          "N",
          "o",
          "u",
          "s",
          "\u00A0",
          "C",
          "o",
          "n",
          "t",
          "a",
          "c",
          "t",
          "e",
          "z",
        ].map((word, i) => (
          <motion.h1
            key={i}
            variants={item}
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center pb-10"
          >
            {word}
          </motion.h1>
        ))}
      </motion.div>
      <Card className="w-150 mx-auto">
        <form action="">
          <CardHeader className="pb-5 text-center">
            <h2 className="text-xl font-semibold">Nous envoyer un mail</h2>
            <p className="text-sm text-slate-500">
              Remplissez le formulaire ci-dessous pour nous contacter.
            </p>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label>Nom</Label>
              <Input type="text" placeholder="Votre Nom"></Input>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="email@email.fr"></Input>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Votre message</Label>
              <Textarea placeholder="Votre message"></Textarea>
            </div>
          </CardContent>

          <CardFooter className="pt-5">
            <Button className="mx-auto w-50 bg-gray-700 hover:bg-slate-800">
              Envoyer
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.section>
  );
}

"use client";
import {useState} from "react";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";

interface Items {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}
const items: Items[] = [
  {
    id: "1",
    title: "title 1",
    subtitle: "subtitle 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora tempore excepturi a nulla necessitatibus non rerum, id sint, obcaecati aspernatur doloremque vel facere mollitia perferendis pariatur aliquid? Dolores, sed.",
  },
  {
    id: "2",
    title: "title 2",
    subtitle: "subtitle 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora tempore excepturi a nulla necessitatibus non rerum, id sint, obcaecati aspernatur doloremque vel facere mollitia perferendis pariatur aliquid? Dolores, sed.",
  },
  {
    id: "3",
    title: "title 3",
    subtitle: "subtitle 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora tempore excepturi a nulla necessitatibus non rerum, id sint, obcaecati aspernatur doloremque vel facere mollitia perferendis pariatur aliquid? Dolores, sed.",
  },
  {
    id: "4",
    title: "title 4",
    subtitle: "subtitle 4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis tempora tempore excepturi a nulla necessitatibus non rerum, id sint, obcaecati aspernatur doloremque vel facere mollitia perferendis pariatur aliquid? Dolores, sed.",
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <main className="bg-gray-800 min-h-screen w-full flex gap-2 flex-col relative text-white ">
      {items.map((item) => (
        <motion.div
          layoutId={item.id}
          className="bg-sky-700 flex   p-2 justify-between items-center w-full md:w-[80%] mx-auto m-2"
        >
          <motion.h5 className="">{item.subtitle}</motion.h5>
          <motion.h2 className="">{item.title}</motion.h2>
          <motion.button
            onClick={() => setSelectedId(item.id)}
            className="bg-red-600 p-2 "
          >
            show more
          </motion.button>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="bg-gray-400 flex flex-col absolute gap-2 p-2 top-[45%] rounded left-[30%] w-1/2 justify-center items-center"
          >
            <motion.h5 className="font-semibold text-sky-600">
              {items
                .filter((filteritem) => filteritem.id === selectedId)
                .map((item) => item.title)}
            </motion.h5>
            <motion.h2>
              {items
                .filter((filteritem) => filteritem.id === selectedId)
                .map((item) => item.description)}
            </motion.h2>
            <motion.button
              onClick={() => setSelectedId(null)}
              className="bg-red-600 p-2 w-full"
            >
              close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

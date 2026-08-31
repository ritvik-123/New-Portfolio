import Link from "next/link";
import { images } from "@/data/content";

const cards = [
  {
    href: "/projects/cs",
    image: images.cs,
    title: "Master's — Computer Science",
    subtitle: "CSU Fresno · ML, NLP, and deployment engineering",
  },
  {
    href: "/projects/mechatronics",
    image: images.mechAccent,
    title: "Bachelor's — Mechatronics Engineering",
    subtitle: "Manipal University Jaipur · robotics and applied ML",
  },
];

export default function DegreeExplorer() {
  return (
    <section className="py-16">
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group glass relative block h-48 overflow-hidden rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm text-zinc-200">{card.subtitle}</p>
              <span className="mt-2 inline-block text-sm font-medium text-white underline underline-offset-4">
                View projects →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

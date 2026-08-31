import Link from "next/link";

export default function ProjectsPageHero({
  title,
  subtitle,
  image,
  secondaryImage,
}: {
  title: string;
  subtitle: string;
  image: string;
  secondaryImage?: string;
}) {
  return (
    <section className="pt-10 pb-6">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-zinc-500 underline underline-offset-4 hover:text-accent"
      >
        ← Back to home
      </Link>
      <div className="glass relative h-56 overflow-hidden rounded-2xl shadow-sm sm:h-72">
        <div className="absolute inset-0 flex">
          <img src={image} alt={title} className="h-full flex-1 object-cover" />
          {secondaryImage && (
            <img
              src={secondaryImage}
              alt=""
              className="hidden h-full flex-1 object-cover sm:block"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{title}</h1>
          <p className="mt-1 text-sm text-zinc-200 sm:text-base">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}

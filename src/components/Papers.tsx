import { papers } from "@/data/content";
import SectionHeading from "@/components/SectionHeading";

export default function Papers() {
  return (
    <section id="papers" className="scroll-mt-20 py-16">
      <SectionHeading>Papers &amp; Publications</SectionHeading>
      <div className="flex flex-col gap-4">
        {papers.map((paper) => (
          <div
            key={paper.title}
            className="glass rounded-2xl p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">
              {paper.link ? (
                <a
                  href={paper.link}
                  className="underline decoration-accent/40 underline-offset-4 hover:text-accent"
                >
                  {paper.title}
                </a>
              ) : (
                paper.title
              )}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">
              {paper.venue}, {paper.year}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {paper.authors}
            </p>
            {paper.abstract && (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {paper.abstract}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

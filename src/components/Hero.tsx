import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="flex flex-col items-start gap-5 py-24">
      {profile.avatarUrl && (
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="h-20 w-20 animate-fade-up rounded-full border-2 border-accent-soft object-cover"
        />
      )}
      <p
        className="animate-fade-up text-sm font-medium tracking-wide text-accent uppercase"
        style={{ animationDelay: "60ms" }}
      >
        {profile.location}
      </p>
      <h1
        className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl"
        style={{ animationDelay: "120ms" }}
      >
        {profile.name}
      </h1>
      <h2
        className="animate-fade-up text-xl font-medium text-accent sm:text-2xl"
        style={{ animationDelay: "180ms" }}
      >
        {profile.title}
      </h2>
      <p
        className="animate-fade-up max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        style={{ animationDelay: "240ms" }}
      >
        {profile.tagline}
      </p>
    </section>
  );
}

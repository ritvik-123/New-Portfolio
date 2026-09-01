import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(85vh-5rem)] flex-col items-start justify-center gap-5 py-12">
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
      <h1 className="flex flex-col gap-1">
        <span
          className="animate-fade-up text-xl font-medium text-muted-soft"
          style={{ animationDelay: "100ms" }}
        >
          {profile.greeting[0]}
        </span>
        <span
          className="animate-fade-up text-4xl font-bold tracking-tight sm:text-6xl"
          style={{ animationDelay: "160ms" }}
        >
          {profile.greeting[1]}
        </span>
      </h1>
      <h2
        className="animate-fade-up text-xl font-medium text-accent sm:text-2xl"
        style={{ animationDelay: "220ms" }}
      >
        {profile.title}
      </h2>
      <p
        className="animate-fade-up max-w-xl text-lg leading-relaxed text-muted"
        style={{ animationDelay: "280ms" }}
      >
        {profile.tagline}
      </p>
      <a
        href="#about"
        className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 animate-bounce flex-col items-center gap-1 text-xs font-medium tracking-wide text-muted-soft uppercase hover:text-accent sm:flex"
      >
        Scroll down
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}

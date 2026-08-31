export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative mb-8 inline-block text-2xl font-bold tracking-tight">
      {children}
      <span className="absolute -bottom-2 left-0 h-1 w-10 rounded-full bg-accent" />
    </h2>
  );
}

import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="glass border-t-0 py-8 text-center text-sm text-zinc-500">
      &copy; {new Date().getFullYear()} {profile.name}
    </footer>
  );
}

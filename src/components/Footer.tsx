import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-zinc-500">
      &copy; {new Date().getFullYear()} {profile.name}
    </footer>
  );
}

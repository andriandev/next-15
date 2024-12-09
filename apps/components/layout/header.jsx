import Link from "@/components/shared/link";

export default function Header() {
  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "History", link: "/history" },
  ];

  return (
    <header>
      <nav className="flex flex-row flex-wrap gap-5">
        {navLinks.map((item) => (
          <Link key={item?.link} href={item?.link}>
            {item?.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

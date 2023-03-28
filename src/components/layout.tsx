import { FunctionComponent } from "react";

interface NavLink {
  href: string;
  label: string;
}

const NavLink: FunctionComponent<NavLink> = ({ href, label }) => (
  <>
    <a
      className="p-3 text-sm font-medium text-base-300 transition-all duration-150 hover:text-base-0"
      href={href}
    >
      {label}
    </a>
  </>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex h-[64px] flex-col justify-center bg-base-900 text-base-0 dark:bg-base-1000">
        <ul className="container mx-auto flex items-center gap-2 px-4">
          <div className="mr-auto text-xl">Signifly</div>
          <li>
            <NavLink href="/tournaments" label="Tournaments" />
          </li>
          <li>
            <NavLink href="/leaderboard" label="Leaderboard" />
          </li>
          <li>
            <NavLink href="/admin" label="Admin" />
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}
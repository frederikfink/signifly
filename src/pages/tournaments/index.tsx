import Link from "next/link";
import { useEffect, useState } from "react";
import RootLayout from "~/components/utility/layout";
import type { BracketTournament } from "~/types/types";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<BracketTournament[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/tournament`);
      const data = (await result.json()) as BracketTournament[];

      setTournaments(data);
    }
    fetchData().catch(console.error);
  }, []);

  return (
    <RootLayout>
      <main className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="my-32">Tournaments</h1>
          <Link
            href="/tournaments/create"
            className="btn bg-green-bright uppercase text-base-0"
          >
            Create
          </Link>
        </div>
        {tournaments.map((t) => (
          <Link key={t.slug} href={`/tournaments/${t.slug}`}>
            {t.name}
          </Link>
        ))}
      </main>
    </RootLayout>
  );
};

export default Tournaments;

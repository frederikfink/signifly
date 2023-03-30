import { useEffect, useState } from "react";
import RootLayout from "~/components/layout";
import { BracketTournament } from "~/types/types";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<BracketTournament[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/tournament`);
      const data = await result.json();

      setTournaments(data);
    }
    fetchData();
  }, []);

  return (
    <RootLayout>
      <main className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="my-32">Tournaments</h1>
          <a
            href="/tournaments/create"
            className="btn bg-green-bright uppercase text-base-0"
          >
            Create
          </a>
        </div>
        {tournaments.map((t) => (
          <a key={t.slug} href={`/tournaments/${t.slug}`}>
            {t.name}
          </a>
        ))}
      </main>
    </RootLayout>
  );
};

export default Tournaments;

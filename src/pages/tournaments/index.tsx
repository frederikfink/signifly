import { useEffect, useState } from "react";
import RootLayout from "~/components/layout";
import { Tournament } from "~/types/types";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

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
      <main>
        <h1>List all tournaments here</h1>
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

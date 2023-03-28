import { useEffect, useState } from "react";
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
    <>
      <h1>List all tournaments here</h1>
      {tournaments.map((t) => (
        <a href={`/tournaments/${t.slug}`}>{t.name}</a>
      ))}
    </>
  );
};

export default Tournaments;

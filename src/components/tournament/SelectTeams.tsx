import Link from "next/link";
import { useEffect, useState } from "react";
import type { Team as TTeam } from "~/types/types";
import { ItemTypes } from "./Team";
import TeamBin from "./TeamBin";

const SelectTeams = () => {
  const [selectedTeams, setSelectedTeams] = useState<TTeam[]>([]);
  const [teams, setTeams] = useState<TTeam[]>([]);
  const maxCounter = 4;

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/teams`);
      const data = (await result.json()) as TTeam[];

      setTeams(data);

      if (teams == undefined) {
        return;
      }
    }

    fetchData().catch(console.error);
  }, []);

  const handleOnDrop = (bin: string, team: TTeam) => {
    console.log(teams);
    setTeams((prevTeams) => prevTeams.filter((t) => t.slug !== team.slug));
    setSelectedTeams((prevTeams) =>
      prevTeams.filter((t) => t.slug !== team.slug)
    );
    console.log(teams);

    if (bin == "teams") {
      setSelectedTeams((prevTeams) => [...prevTeams, team]);
    } else {
      setTeams((prevTeams) => [...prevTeams, team]);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <TeamBin
          maxCounter={null}
          key={1}
          teams={teams}
          accept={ItemTypes.Team}
          bin={"teams"}
          onDrop={handleOnDrop}
        />
        <TeamBin
          maxCounter={maxCounter}
          key={2}
          teams={selectedTeams}
          accept={ItemTypes.Team}
          bin={"selectedTeams"}
          onDrop={handleOnDrop}
        />
      </div>
      {selectedTeams.length === maxCounter && (
        <div className="mt-4 flex items-center justify-center">
          <Link
            href="/tournaments/tournament-galactic-showdown"
            className="btn bg-green-bright"
          >
            Create Tournament
          </Link>
        </div>
      )}
    </div>
  );
};

export default SelectTeams;

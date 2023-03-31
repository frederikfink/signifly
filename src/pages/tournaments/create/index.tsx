import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RootLayout from "~/components/utility/layout";
import CreateBracketTournament from "~/components/tournament/CreateBracketTournament";
import SelectTeams from "~/components/tournament/SelectTeams";
import SelectStyle from "~/components/tournament/SelectTournamentStyle";

const AllVsAllTournament = ({ onCancel }: { onCancel: () => void }) => {
  const handleCancel = () => {
    onCancel();
  };
  return (
    <>
      <button className="btn" onClick={handleCancel}>
        cancel
      </button>
      <p>all vs all</p>
    </>
  );
};

const CreateTournament = () => {
  const [tournamentStyle, setTournamentStyle] = useState<string | null>(null);
  const [selectPlayers, setSelectPlayers] = useState<boolean>(false);
  let content;

  const handleStyleSelect = (style: string) => {
    console.log("Hello");
    setTournamentStyle(style);
  };

  const handleCancel = () => {
    setTournamentStyle(null);
  };

  const handleSelectPlayers = () => {
    setSelectPlayers(true);
  };

  if (selectPlayers) {
    content = (
      <DndProvider backend={HTML5Backend}>
        <SelectTeams />
      </DndProvider>
    );
  } else {
    content = (
      <>
        {tournamentStyle === null && (
          <SelectStyle onStyleSelect={handleStyleSelect} />
        )}
        {tournamentStyle === "bracket-tournament" && (
          <CreateBracketTournament
            onCancel={handleCancel}
            onNext={handleSelectPlayers}
          />
        )}
        {tournamentStyle === "allvsall-tournament" && (
          <AllVsAllTournament onCancel={handleCancel} />
        )}
      </>
    );
  }

  return (
    <RootLayout>
      <div className="flex h-full items-center justify-center gap-6">
        {content}
      </div>
    </RootLayout>
  );
};

export default CreateTournament;

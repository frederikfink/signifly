interface CreateBracketTournamentProps {
  onCancel: () => void;
  onNext: () => void;
}

const CreateBracketTournament = ({
  onCancel,
  onNext,
}: CreateBracketTournamentProps) => {
  const handleCancel = () => {
    onCancel();
  };

  const handleSelectPlayers = () => {
    onNext();
  };

  return (
    <div className="w-96">
      <div className="rounded-xl border border-base-300 bg-base-0/80 p-7 dark:border-base-700 dark:bg-base-900/80">
        <div className="mb-6">
          <label className="label">Tournament name</label>
          <input
            required
            type="text"
            name="tournament_name"
            placeholder="Give the tournament an awesome name"
            className="input"
          ></input>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center rounded border border-base-300 bg-base-50 pl-4 transition-transform duration-150 active:scale-[95%] dark:border-base-700 dark:bg-base-800">
            <input
              id="4-teams-radio"
              className="h-4 w-4 focus:ring-yellow-normal"
              type="radio"
              value="4"
              name="tournament_size"
            />
            <label
              htmlFor="4-teams-radio"
              className="w-full cursor-pointer p-4 dark:text-base-0"
            >
              <p>4 Teams</p>
              <p className="text-sm text-base-500">8 Players</p>
            </label>
          </li>
          <li className="flex items-center rounded border border-base-300 bg-base-50 pl-4 transition-transform duration-150 active:scale-[95%] dark:border-base-700 dark:bg-base-800">
            <input
              id="8-teams-radio"
              className="h-4 w-4 focus:ring-yellow-normal"
              type="radio"
              value="4"
              name="tournament_size"
            />
            <label
              htmlFor="8-teams-radio"
              className="w-full cursor-pointer p-4 dark:text-base-0"
            >
              <p>8 Teams</p>
              <p className="text-sm text-base-500">16 Players</p>
            </label>
          </li>
          <li className="flex items-center rounded border border-base-300 bg-base-50 pl-4 transition-transform duration-150 active:scale-[95%] dark:border-base-700 dark:bg-base-800">
            <input
              id="16-player-radio"
              className="h-4 w-4 focus:ring-yellow-normal"
              type="radio"
              value="4"
              name="tournament_size"
            />
            <label
              htmlFor="16-player-radio"
              className="w-full cursor-pointer p-4 dark:text-base-0"
            >
              <p>16 Teams</p>
              <p className="text-sm text-base-500">32 Players</p>
            </label>
          </li>
        </ul>
        <div className="mt-6 flex gap-4">
          <button
            className="btn border-base-700 dark:text-base-0"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="btn grow bg-green-bright"
            onClick={handleSelectPlayers}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBracketTournament;

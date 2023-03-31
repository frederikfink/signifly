const SelectStyle = ({
  onStyleSelect,
}: {
  onStyleSelect: (style: string) => void;
}) => {
  const handleNextStepClick = (style: string) => {
    onStyleSelect(style);
  };
  return (
    <>
      <button
        onClick={() => handleNextStepClick("bracket-tournament")}
        className="btn-card rounded-xl border border-base-300 bg-base-0/80 p-6 text-left backdrop-blur dark:border-base-700 dark:bg-base-900/80"
      >
        <h3>Bracket-style tournament</h3>
        <p className="text-sm text-base-500">Simple knockout tournamnet</p>

        <p className="mt-5 text-base-500">4, 8 or 16 players supported</p>
      </button>
      <button
        onClick={() => handleNextStepClick("allvsall-tournament")}
        className="btn-card rounded-xl border border-base-300 bg-base-0/80 p-6 text-left backdrop-blur dark:border-base-700 dark:bg-base-900/80"
      >
        <h3>All vs All tournament</h3>
        <p className="text-sm text-base-500">Every team plays every team</p>
        <p className="mt-5 text-base-500">4 - 16 players supported</p>
      </button>
    </>
  );
};

export default SelectStyle;

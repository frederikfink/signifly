import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BracketTournament from "~/components/tournament/BracketTournament";
import RootLayout from "~/components/utility/layout";

const Tournament = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (slug) {
      setReady(true);
    }
  }, [router]);

  return (
    <RootLayout>
      <main className="container mx-auto">
        {isReady && (
          <BracketTournament slug={(slug as string) ?? ""}></BracketTournament>
        )}
      </main>
    </RootLayout>
  );
};
export default Tournament;

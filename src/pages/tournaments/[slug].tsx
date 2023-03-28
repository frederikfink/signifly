import { useRouter } from "next/router";
import BracketTournament from "~/components/BracketTournament";
import RootLayout from "~/components/layout";

const Tournament = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <RootLayout>
      <BracketTournament
        slug={typeof slug === "string" ? slug : ""}
      ></BracketTournament>
    </RootLayout>
  );
};
export default Tournament;

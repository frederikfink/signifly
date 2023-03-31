import { type NextPage } from "next";
import RootLayout from "~/components/utility/layout";
import Leaderboard from "~/components/leaderboard/Leaderboard";

const Home: NextPage = () => {
  return (
    <RootLayout>
      <main className="container mx-auto px-4">
        <div className="my-32">
          <h1>
            Welcome, to the
            <br />
            Signifly foosball dashboard
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-20 xl:grid-cols-2">
          <div>
            <div className="mb-6 flex gap-2">
              <a
                className="group text-xl transition-all duration-100 hover:text-green-normal dark:text-base-0 dark:hover:text-green-bright"
                href="/leaderboards"
              >
                Leaderboard{" "}
                <span className="transition-all duration-100 group-hover:ml-4">
                  {"--->"}
                </span>
              </a>
            </div>
            <Leaderboard limit={5}></Leaderboard>
          </div>
        </div>
      </main>
    </RootLayout>
  );
};

export default Home;

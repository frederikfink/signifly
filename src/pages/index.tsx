import { type NextPage } from "next";
import RootLayout from "~/components/layout";
import Leaderboard from "~/components/Leaderboard";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Home: NextPage = () => {
  return (
    <RootLayout>
      <main className={`${inter.variable} container mx-auto px-4 font-sans`}>
        <div className="my-32">
          <h1 className="text-5xl ">
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

          {/* <div>
            <div className="flex gap-2">
              <h3 className="mb-6 text-xl">Latest matches</h3>
            </div>
            <LatestMatches limit={5}></LatestMatches>
          </div> */}
        </div>
      </main>
    </RootLayout>
  );
};

export default Home;

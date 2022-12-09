import { type NextPage } from "next";
import Head from "next/head";
import JobList from "../components/JobList";
import Nav from "../components/Nav";

import { trpc } from "../utils/trpc";

const keywords = [
  "NextJS",
  "TypeScript",
  "TailwindCSS",
  "React",
  "Vue",
  "Fintech",
  "FAANG",
  "Remote",
];

const Home: NextPage = () => {
  const listings = trpc.jobPost.getAll.useQuery();

  return (
    <>
      <Head>
        <title>front end jobs</title>
        <meta name="description" content="Front end developer opportunities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="container mx-auto flex min-h-screen flex-col p-4 md:w-1/2">
        <p className="mx-15 my-20 text-center font-sans text-5xl font-extrabold text-gray-100">
          Find your dream front end developer opportunity.
        </p>
        <input type="text" placeholder="Keywords..." className="rounded p-2" />
        <div className="mt-3 flex flex-wrap gap-3">
          {keywords.map((keyword) => (
            <TechnologyCard key={keyword}>{keyword}</TechnologyCard>
          ))}
        </div>
        {listings?.data && <JobList jobs={listings.data} />}
      </main>
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  children: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ children }) => {
  return (
    <div className="rounded border-2 border-gray-300 p-2 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="font-mono text-sm text-gray-100">{children} +</h2>
    </div>
  );
};

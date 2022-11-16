import { type NextPage } from "next";
import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";

// import { trpc } from "../utils/trpc";
// import { useEffect, useState } from "react";

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
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  // const [jobs, setJobs] = useState<string | undefined>();

  // function requestJobs() {
  //   const url =
  //     "https://www.reed.co.uk/api/1.0/search?keywords=front-end-developer";
  //   const key = "6c0b1812-da05-4831-97b0-9ff233c1bf6a";
  //   // const params = "{ keywords: 'front end developer' }";

  //   //create xmlHttpRequest object
  //   const http = new XMLHttpRequest();
  //   //open connection. true - asynchronous, false - synchronous
  //   http.open("GET", url, true);

  //   //Send the proper header information
  //   // http.setRequestHeader("Content-type", "application/json");
  //   http.setRequestHeader("Authorization", "Basic " + key);
  //   http.setRequestHeader("Access-Control-Allow-Origin", "*");
  //   http.setRequestHeader(
  //     "Access-Control-Allow-Methods",
  //     "DELETE, POST, GET, OPTIONS"
  //   );
  //   http.setRequestHeader(
  //     "Access-Control-Allow-Headers",
  //     "Content-Type, Authorization, X-Requested-With"
  //   );

  //   //Callback when the state changes
  //   http.onreadystatechange = function () {
  //     if (http.readyState == 4 && http.status == 200) {
  //       alert(http.responseText);
  //       setJobs(http.response);
  //       console.log(jobs);
  //     }
  //   };
  //   //Send request to the server
  //   http.send();
  // }

  // useEffect(() => {
  //   requestJobs();
  // }, [requestJobs]);

  return (
    <>
      <Head>
        <title>front end jobs</title>
        <meta name="description" content="Front end developer opportunities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-4">
        <h1 className="text-xl font-extrabold leading-normal text-purple-300">
          front
          <span className="text-yellow-300">end</span>
          <span className="text-green-300">jobs</span>
        </h1>
      </header>
      <main className="container mx-auto flex min-h-screen flex-col p-4 md:w-1/2">
        <p className="mx-15 my-20 text-center font-sans text-5xl font-extrabold text-gray-100">
          Find your dream front end developer opportunity.
        </p>
        <input type="text" placeholder="Keywords..." className="rounded p-2" />
        <div className="mt-3 flex flex-wrap gap-3">
          {keywords.map((keyword) => (
            <TechnologyCard key="keyword">{keyword}</TechnologyCard>
          ))}
        </div>
        {/* <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div> */}
        {/* <AuthShowcase /> */}
      </main>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-2">
//       {sessionData && (
//         <p className="text-2xl text-blue-500">
//           Logged in as {sessionData?.user?.name}
//         </p>
//       )}
//       {secretMessage && (
//         <p className="text-2xl text-blue-500">{secretMessage}</p>
//       )}
//       <button
//         className="rounded-md border bg-violet-400 px-4 py-2 text-xl hover:bg-violet-100"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };

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

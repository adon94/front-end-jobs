import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Nav from "../../components/Nav";
import { trpc } from "../../utils/trpc";

const CreateJobPost: NextPage = () => {
  const mutation = trpc.jobPost.create.useMutation();
  const [jobPost, setJobPost] = useState({
    title: "",
    description: "",
  });
  function submitListing() {
    mutation.mutate(jobPost);
  }
  return (
    <>
      <Head>
        <title>front end jobs</title>
        <meta name="description" content="Front end developer opportunities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="container mx-auto flex min-h-screen flex-col p-4 md:w-1/2">
        <div className="mb-5 flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            className="rounded p-1 text-black"
            id="title"
            type="text"
            value={jobPost.title}
            onChange={(e) =>
              setJobPost((og) => ({ ...og, title: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <textarea
            className="rounded p-1 text-black"
            id="description"
            value={jobPost.description}
            rows={15}
            onChange={(e) =>
              setJobPost((og) => ({ ...og, description: e.target.value }))
            }
          />
        </div>
        <button onClick={submitListing}>Submit</button>
      </main>
    </>
  );
};

export default CreateJobPost;

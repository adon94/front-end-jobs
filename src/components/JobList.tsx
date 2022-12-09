import { type JobPost } from "@prisma/client";
import Link from "next/link";

type props = {
  jobs: JobPost[];
};

function JobList({ jobs }: props) {
  return (
    <div className="my-5 grid divide-y rounded-md bg-white text-black">
      {jobs.map((job: JobPost) => (
        <Link href="#" key={job.title}>
          <div className="p-2">
            <h3>{job.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default JobList;

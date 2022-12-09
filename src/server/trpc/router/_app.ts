import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { jobPostRouter } from "./jobPost";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  jobPost: jobPostRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

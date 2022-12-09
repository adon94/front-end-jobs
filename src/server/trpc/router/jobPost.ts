import z from "zod";
import { router, publicProcedure } from "../trpc";

export const jobPostRouter = router({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      })
    )
    .mutation(({ ctx, input }: any) => {
      return ctx.prisma.jobPost.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.jobPost.findMany();
  }),
  getByUser: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user
      .findUnique({
        where: { id: ctx?.session?.user?.id || undefined },
      })
      .jobPosts();
  }),
});

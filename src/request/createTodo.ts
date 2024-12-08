import { z } from "@hono/zod-openapi";

export const createTodo = z.object({
    title: z.string().openapi({
        example: 'title'
    }),
    content: z.string().openapi({
        example: 'content'
    })
})
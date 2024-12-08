import { z } from "@hono/zod-openapi"
export const TodoSchema = z.object({
    title: z.string().openapi({
        example: 'title',
    }),
    content: z.string().openapi({
        example: 'content'
    })
})

export const TodoListSchema = z.array(TodoSchema).openapi('TodoListSchema')

export type Todo = z.infer<typeof TodoSchema>
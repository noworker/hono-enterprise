import { createRoute, RouteHandler, z } from "@hono/zod-openapi";
import { Todo, TodoListSchema, TodoSchema } from "../../response/todo";
import { ErrorResponse } from "../../response/error";
import { Bindings, HonoEnv } from "../..";
import { env } from "hono/adapter";

// OpenAPI definition
export const getTodosRoute = createRoute({
    path: '/',
    method: 'get',
    description: '登録されているすべてのTodoのリストを取得します',
    responses: {
      200: {
        description: 'OK',
        content: {
          'application/json': {
            schema: TodoListSchema,
          },
        },
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: ErrorResponse,
          },
        },
      },
    },
})


export const getTodosHandler: RouteHandler<typeof getTodosRoute, HonoEnv> = async (c) => {
  try {
    const todoRepository = c.get('todoRepository');
    console.log(c.env.URL)
    const todos: Todo[] = todoRepository.getTodos();
    return c.json(todos, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: 'Internal Server Error', stackTrace: e }, 500);
  }
};
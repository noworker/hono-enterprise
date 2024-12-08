import { createRoute, RouteHandler, z } from "@hono/zod-openapi";
import { Todo, TodoListSchema, TodoSchema } from "../../response/todo";
import { ErrorResponse } from "../../response/error";
import { env } from "hono/adapter";
import { Context } from "hono";
import { TYPES } from "../../di/di";
import { ITodoRepository, TodoRepository } from "../../repositories/todoRepository";

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


export const getTodosHandler: RouteHandler<typeof getTodosRoute, {}> = async (c: Context) => {
  try {
    const todoRepository: TodoRepository = c.get('todoRepository');
    const todos: Todo[] = todoRepository.getTodos();

    return c.json(todos, 200);
  } catch (e) {
    console.error(e);
    return c.json({ message: 'Internal Server Error', stackTrace: e }, 500);
  }
};
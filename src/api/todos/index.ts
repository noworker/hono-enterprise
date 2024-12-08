import { OpenAPIHono } from '@hono/zod-openapi';
import { getTodosHandler, getTodosRoute } from './getTodos';
import { diContainer } from '../../di/diConfig';
import { ITodoRepository } from '../../repositories/todoRepository';

export const todosApi = new OpenAPIHono();
todosApi
  .openapi(getTodosRoute, getTodosHandler)



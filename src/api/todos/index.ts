import { OpenAPIHono } from '@hono/zod-openapi';
import { getTodosHandler, getTodosRoute } from './getTodos';
import { diContainer } from '../../di/diConfig';
import { ITodoRepository } from '../../repositories/todoRepository';
import { Variables } from 'hono/types';
import { HonoEnv } from '../..';

export const todosApi = new OpenAPIHono<HonoEnv>();
todosApi
  .openapi(getTodosRoute, getTodosHandler)



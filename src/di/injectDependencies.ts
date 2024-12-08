import { MiddlewareHandler } from 'hono';
import { diContainer } from './diConfig';
import { Di } from './di';
import { ITodoRepository } from '../repositories/todoRepository';

export const injectDependencies: MiddlewareHandler = async (c, next) => {
  const TodoRepository = diContainer.get<ITodoRepository>(Di.TodoRepository);
  console.log('middleware')
  c.set('diContainer', diContainer);
  c.set('todoRepository', TodoRepository);
  return next();
};
import 'reflect-metadata';
import { Container } from 'inversify';
import { Di } from './di';
import { ITodoRepository, TodoRepository } from '../repositories/todoRepository';

const diContainer = new Container();

diContainer.bind<ITodoRepository>(Di.TodoRepository).to(TodoRepository);

export { diContainer };
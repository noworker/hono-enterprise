import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './di';
import { ITodoRepository, TodoRepository } from '../repositories/todoRepository';

const diContainer = new Container();

diContainer.bind<ITodoRepository>(TYPES.TodoRepository).to(TodoRepository);

export { diContainer };
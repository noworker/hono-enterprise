import 'reflect-metadata';
import { injectable } from 'inversify'
import '../response/todo'
import { Todo } from '../response/todo'

export interface ITodoRepository {
    getTodos() : Todo[]
}

@injectable()
export class TodoRepository implements ITodoRepository {
    getTodos() : Todo[] {
        return [
            {
                title: 'test',
                content: 'test-content'
            },
            {
                title: 'test2',
                content: 'test2-content'
            }
        ]
    }
}


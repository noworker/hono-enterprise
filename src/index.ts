import { prettyJSON } from 'hono/pretty-json';
import { api } from './api';
import { injectDependencies } from './di/injectDependencies';
import { diContainer } from './di/diConfig';
import { ITodoRepository } from './repositories/todoRepository';
import { OpenAPIHono } from '@hono/zod-openapi';


const app = new OpenAPIHono<{
  Variables: {
    diContainer: typeof diContainer;
    postService: ITodoRepository;
  },
  Env: {
    foo: string
  }
}>();

app.use('*', injectDependencies);

app.use(prettyJSON());
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404));

app.route('/api', api);

export default app;
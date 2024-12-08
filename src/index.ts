import { prettyJSON } from 'hono/pretty-json';
import { api } from './api';
import { injectDependencies } from './di/injectDependencies';
import { diContainer } from './di/diConfig';
import { ITodoRepository } from './repositories/todoRepository';
import { OpenAPIHono } from '@hono/zod-openapi';


type Variables = {
  diContainer: typeof diContainer;
  todoRepository : ITodoRepository;
}

type Bindings = {
}

export type HonoEnv = {
  Bindings: Bindings;
  Variables: Variables;
};

const app = new OpenAPIHono<HonoEnv>();

app.use('*', injectDependencies);

app.use(prettyJSON());
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404));

app.route('/api', api);

export default app;
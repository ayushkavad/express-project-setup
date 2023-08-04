import { startServer } from '../start';

let server, baseURL;
beforeAll(async () => {
  server = await startServer();
  baseURL = `http://localhost:${server.address().port}/api`;
});

afterAll(() => server.close());

// make requests to the baseURL

import express from 'express';

import { getGreetRoutes } from './greet';

function getRouter() {
  const router = express.Router();

  router.use('/greet', getGreetRoutes());

  return router;
}

export { getRouter };

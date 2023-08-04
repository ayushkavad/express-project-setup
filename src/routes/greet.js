import express from 'express';

function getGreetRoutes() {
  const router = express.Router();
  router.get('/welcome', greeting);
  return router;
}

async function greeting(req, res) {
  res.json({
    status: 'success',
    message: 'Hey there!',
  });
}

export { getGreetRoutes };

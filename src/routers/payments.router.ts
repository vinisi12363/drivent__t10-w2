import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createEnrollmentSchema } from '@/schemas';

//TODO  falta acrescentar  s funções de payments que estão em controllers
const paymentsRouter = Router();

paymentsRouter
  .all('/*', authenticateToken)
  .get('/ticketId', )
  .post('/process', validateBody(createEnrollmentSchema),);

export { paymentsRouter };

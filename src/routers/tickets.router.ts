import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createEnrollmentSchema } from '@/schemas';
import { getTickets } from '../controllers/tickets.controller';
//TODO  falta acrescentar  s funções de tickets que estão em controllers


const ticketsRouter = Router();

 ticketsRouter
  .all('/*', authenticateToken)
  .get('/types',getTickets)
  .get('/', )
  .post('/', validateBody(createEnrollmentSchema),);

export { ticketsRouter };

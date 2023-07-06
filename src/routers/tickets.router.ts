import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createEnrollmentSchema } from '@/schemas';
import { getTickets, getTicketsByUserId } from '../controllers/tickets.controller';



const ticketsRouter = Router();

 ticketsRouter
  .all('/*', authenticateToken)
  .get('/types',getTickets)
  .get('/', getTicketsByUserId)
  .post('/', validateBody(createEnrollmentSchema),);

export { ticketsRouter };

import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketService from '@/services/tickets-service'

export async function getTickets(req: AuthenticatedRequest, res: Response) {
 

  try {
    const tickets = await ticketService.getTickets()
    console.log(tickets)
    return res.status(httpStatus.OK).send(tickets);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}
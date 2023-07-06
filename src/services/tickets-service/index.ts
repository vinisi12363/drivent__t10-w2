import { Ticket} from '@prisma/client';
import { request } from '@/utils/request';
import { invalidDataError, notFoundError } from '@/errors';
import addressRepository, { CreateAddressParams } from '@/repositories/address-repository';
import ticketsRepository from '../../repositories/tickets-repository'; 
import { exclude } from '@/utils/prisma-utils';
import { TicketPostType } from '@/protocols';


async function getTickets(){
  const result = await ticketsRepository.findTickets()

  return result;
}



async function newTicket(ticketTypeId:TicketPostType){

}

const ticketsService = {
  getTickets,
  newTicket
};



export default ticketsService;

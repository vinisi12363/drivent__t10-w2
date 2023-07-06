import { Ticket} from '@prisma/client';
import { request } from '@/utils/request';
import { invalidDataError, notFoundError, requestError } from '@/errors';
import addressRepository, { CreateAddressParams } from '@/repositories/address-repository';
import ticketsRepository from '../../repositories/tickets-repository'; 
import { exclude } from '@/utils/prisma-utils';
import { TicketPostType } from '@/protocols';


async function getTickets(){
  const result = await ticketsRepository.findTickets()

  return result;
}

async function getTicketsByUserId(id:number){
  const result  = await ticketsRepository.getTicketsFromUser(id)
  
  if (result===null || !result){
    throw requestError(404, "Bad Request");
  }


  return result;
}

async function newTicket(ticketTypeId:TicketPostType){

}




const ticketsService = {
  getTickets,
  newTicket,
  getTicketsByUserId
};



export default ticketsService;

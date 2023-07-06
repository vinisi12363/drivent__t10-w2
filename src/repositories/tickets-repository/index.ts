import { Ticket } from '@prisma/client';
import { prisma } from '@/config';
import { TicketPostType } from '../../protocols';


type User = {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

type getUser = User
 
async function findTickets() {
  return prisma.ticketType.findMany(); 
}
type createTicket = Omit<Ticket, 'ticketId'>



async function create(ticketInfo:createTicket) {
  //FIXME ver as aulas de relacionamentos antes de usar essa func aqui.
  /*const ticket  = await prisma.payment.create({
    data: {
       
    }
  }); 

  return ticket

  */
}

async function getTicketsFromUser(userId:number){

    const ticketsFound = await prisma.ticket.findFirst({
      where: {
        Enrollment: {
          User: {
            id: userId
          }
        }
      },
      include: {
        Enrollment: true
      }
    });
    return ticketsFound;

}
const ticketsRepository = {
  findTickets,
  create,
  getTicketsFromUser
};

export default ticketsRepository;

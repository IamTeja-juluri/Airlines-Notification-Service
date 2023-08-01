const {TicketRepository} = require('../repositories');
const {MAILER} = require('../config');
const ticket = require('../models/ticket');

const ticketRepository = new TicketRepository();

async function sendEmail(mailFrom,mailTo,subject,text){
   try{
      const response= await MAILER.sendMail({
         from: mailFrom,
         to: mailTo,
         subject:subject,
         text:text
      });
      return response;
   }catch(error){
    console.log(error);
    throw error;
   }
}


async function createTicket(data){
    try{
        const response = await ticketRepository.create(data);
        return response;
    }catch(error){
        console.log(error);
        throw error;
       }
}

async function getPendingEmails(){
    try{
       const res= await ticketRepository.getPendingEmails();
       return res;
    }catch(error){
        console.log(error);
        throw error;
       }
}


module.exports={
  sendEmail,createTicket,getPendingEmails
}
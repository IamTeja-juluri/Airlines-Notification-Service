const { EmailService } = require('../services')

async function create(req,res){
    try{
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content:req.body.content,
            recepientEmail:req.body.recepientEmail
        });
        console.log(response);
       return  res.status(201).json(response);
    }catch(error){
        return res.status(500).json(error);
    }
}

module.exports={
  create
}
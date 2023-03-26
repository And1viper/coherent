import nodemailer from "nodemailer";

export default class ContactCtrl {
    static async apiSendEmail (req, res, next) {
        const contactEmail = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        });
        
        contactEmail.verify((error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("Ready to Send");
          }
        });
        
        const name = req.body.name;
        const email = req.body.email;
        const city = req.body.city;
        const phone = req.body.phone; 
        const message = req.body.message; 

        

        const mail = {
          from: name,
          to: process.env.EMAIL_DEST,
          subject: "Contact Form Submission",
          html: `<p>Name: ${name}</p>
                 <p>Email: ${email}</p>
                 <p>City: ${city}</p>
                 <p>Phone: ${phone}</p>
                 <p>Message: ${message}</p>`,
        };
        
        contactEmail.sendMail(mail, (error) => {
          if (error) {
            res.json({ status: "ERROR" });
          } else {
            res.json({ status: "Message Sent" });
          }
        });
    }
}
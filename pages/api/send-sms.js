import {vonage} from "../../vonage";

export default async function handler(req, res) {
 

  const { to, body } = req.body;
     
  const sms = vonage.message.sendSms(
      "+919831739043", // The virtual number assigned to your account
      to,     // The phone number you want to send the SMS to
      body,        // The text of the message
      (err, responseData) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Failed to send message" });
        } else {
          console.dir(responseData);
          res.status(200).json({ message: "Message sent successfully" });          
        }
      }
    );
}

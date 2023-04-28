import { useState } from 'react';
import vonage from '@vonage/server-sdk';
const Sms = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    const vonageApiKey = 'YOUR_VONAGE_API_KEY';
    const vonageApiSecret = 'YOUR_VONAGE_API_SECRET';
    const vonageVirtualNumber = 'YOUR_VONAGE_VIRTUAL_NUMBER';

    const vonageClient = new vonage({
      apiKey: vonageApiKey,
      apiSecret: vonageApiSecret,
      applicationId: null,
      privateKey: null
    });

    const from = vonageVirtualNumber;
    const to = phoneNumber;
    const text = message;

    try {
      const response = await vonageClient.message.sendSms(from, to, text);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Send SMS</h2>
      <label htmlFor="phone-number-input">Phone Number:</label>
      <input type="text" id="phone-number-input" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <br />
      <label htmlFor="message-input">Message:</label>
      <input type="text" id="message-input" value={message} onChange={handleMessageChange} />
      <br />
      <button onClick={handleSendClick}>Send SMS</button>
    </div>
  );
};

export default Sms;

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
const accountSid = 'AC10ad963aa36211e5ba751b6f532f2662'
// const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const authToken = 'c364d170ced31e3fa3467d0347dddb77'

const client = require('twilio')(accountSid, authToken);

client.messages.create({
	// to: process.env.MY_PHONE_NUMBER,
	to: '+14156994708',
	from: '+14159688903',
	body: 'Welcome to Purrrfect Duty!'
}).then((message) => console.log(message.sid))
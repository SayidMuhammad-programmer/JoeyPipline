const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const cors = require('cors');

require('dotenv').config();

app.use(express.static("public"))


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  


app.route('/MSG')
.post(jsonParser, async (req,res) =>{

    console.log(req.body)

    const TextList = ["7865649969", "7863157175", "7863079021", "3058511342", "3057339632", "3057947791", "3057782576" , "3057339654"];


    for (let index = 0; index < TextList.length; index++) {

        console.log("Dm sent")

        // console.log(process.env.ACCOUNTSID)
        // console.log(process.env.AUTHTOKEN)


    const accountSid = process.env.ACCOUNTSID; 
    const authToken = process.env.AUTHTOKEN; 
    const client = require('twilio')(accountSid, authToken); 
     
    client.messages 
          .create({ 
             body: `Weekly Reminder Joey Still Hasn't Pulled A Bitch. ${req.body.DaysLeft} `,  
             messagingServiceSid: 'MGe22c82bca171c84ceb5a9c0bb926ea8f',      
             to: TextList[index]
           }) 
          .then(message => console.log("Dm sent")) 
          .done();


          await sleep(3000);    

   }



	
})

const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })  





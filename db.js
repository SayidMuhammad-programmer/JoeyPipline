


const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PlayerAccountTracker = new Schema({
walletaddress: String,
playCount: Number,
})


const checkData = async (walletaddress) =>{

    const connSti = "mongodb+srv://Sayidm_Blackdove:03675930367593Sm@cluster0.jbfrk.mongodb.net/Gplay?retryWrites=true&w=majority"
await mongoose.connect(connSti, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false,
useCreateIndex: true
});

const db = mongoose.connection;

const MyModel =   mongoose.model('PlayerAccounts', PlayerAccountTracker);


    let filtterObJ = {walletaddress : walletaddress}
    let  doc = await MyModel.findOne(filtterObJ);
    db.close();

    if(doc){
            return {
                exist: true,
                playCount: doc.playCount
            }
    }else{
            return false
    }
} // End


  module.exports = { checkData }

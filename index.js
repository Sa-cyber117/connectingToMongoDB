//  READ

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
const database = "newDB";

async function firstMongo(){
    let res = await client.connect();
    let db = res.db(database);
    let connectionR = db.collection('NewCollections');
    let na = await connectionR.find({}).toArray();
    console.log(na);
}

firstMongo();
import { MongoClient } from "mongodb";

async function handler(req,res) {

    if(req.method==='POST'){
        const data=req.body;

        const client=await MongoClient.connect('mongodb+srv://eswarsatyavarapu7981:eswar7396@cluster0.uytpi29.mongodb.net/todolist?retryWrites=true&w=majority')
        const db=client.db()

        const meetupsCollection=db.collection('todolist')
    
        const result = await meetupsCollection.insertOne({data})
        
        console.log(result)

        client.close()

        res.status(201).json({message:'data inserted'})
    }
}

export default handler;
const express = require('express')

const cors = require('cors');
require('dotenv').config();
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');

const port = process.env.PORT || 5000



app.use(cors())

app.use(express.json())




// mongo db 



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster01.2xfw1xu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01`;

console.log(process.env.DB_USER);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
    const craftItemCollection= client.db('CraftItemDB').collection('craftItem')

  app.get('/craftItem', async(req,res)=>{
     const crafts = craftItemCollection.find()
     const result = await crafts.toArray()
     res.send(result)
  })

  app.post('/craftItem' , async(req, res)=>{
    const data = req.body
    const result = await craftItemCollection.insertOne(data)
    res.send(result)
  })
  

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/' , (req , res)=>{
  res.send('Pottery and Ceramic Hub Is running')
})

app.listen(port , ()=>{
  console.log('server running on port:', port);
})
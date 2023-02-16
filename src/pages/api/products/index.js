import { MongoClient,ServerApiVersion } from 'mongodb'; 



export default async function handler(req, res) {
  try {
    
    const uri = "mongodb+srv://health_elite_salman:JBLZx1rqWyyB8TRq@cluster0.cwkrobe.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    const db = client.db('Health_Elite_NextJS');

    const collection = db.collection('productCollection');
    const products = await collection.find().toArray();

    res.status(200).json({ products });
    
    client.close();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
// Database Name
const dbName = "test";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
  // the following code examples can be pasted here...

  //TODO://this function is called to insert into the collections
  //   const insertResult = await collection.insertMany([
  //     { Name: "Apple", Score: 8, review: "Is good, duh is a Apple" },
  //     { Name: "Orange", Score: 10, review: "Is good is a Orange" },
  //     { Name: "Banana", Score: 7, review: "Is good if fresh." },
  //   ]);
  //   console.log("Inserted documents =>", insertResult);

  // TODO://This one is to call all information
  //   const findResult = await collection.find({}).toArray();
  //   console.log("---------\n\nFound documents =>", findResult);

  // TODO://This one is to call specified information back
  const filteredDocs = await collection.find({ Name: "Apple" }).toArray();
  console.log("Found documents filtered by { Name: Apple } =>", filteredDocs);
  //TODO://This one is to deleted specified info
  const deleteResult = await collection.deleteMany({ Name: "Apple" });
  console.log("Deleted documents =>", deleteResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

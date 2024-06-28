const mongoose = require('mongoose');
const {
  mongo,
  digestAuth,
  searchBaseUrl,
  collectionName,
  databaseName,
} = require('./config');
const { request } = require('urllib');

const findIndexByName = async (indexName) => {
  const allIndexesResponse = await request(
    `${searchBaseUrl}/${databaseName}/${collectionName}`,
    {
      dataType: 'json',
      contentType: 'application/json',
      method: 'GET',
      digestAuth: digestAuth,
    }
  );
console.log("-=-=-=-=-",allIndexesResponse.data)
  return allIndexesResponse.data.find((i) => i.name === indexName);
};

const upsertSearchIndex = async () => {
  const shopSearchIndex = await findIndexByName('shop_search');
  console.log({shopSearchIndex})
  if (!shopSearchIndex) {
    await request(searchBaseUrl, {
      data: {
        name: 'shop_search',
        database: databaseName,
        collectionName: collectionName,
        // https://www.mongodb.com/docs/atlas/atlas-search/index-definitions/#syntax
        mappings: {
          dynamic: true,
        },
      },
      dataType: 'json',
      contentType: 'application/json',
      method: 'POST',
      digestAuth: digestAuth,
    });
  }
};

exports.mongoClient = new mongoose.mongo.MongoClient(mongo.uri);

exports.connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(mongo.uri);
    await upsertSearchIndex();
    console.log('Mongo connected');
  } catch (error) {
    console.log(error);
  }
};

/**
 * Hackathon September 2020
 * @author Rishikesh <Rishikesh.S@netapp.com>
 */
import express from 'express';
import { ApolloServer, gql  } from 'apollo-server-express';
import fs from 'fs';
import https from 'https';
import mongoose from 'mongoose';

import schemas from './schemas';
import resolvers from './resolvers';
import volumeModel from './models/volumeModel';

const apollo = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async () => {
      return {
        models: {
          volumeModel,
        },
      };
    },
});

const app = express()
apollo.applyMiddleware({ app })


const server = https.createServer(
{
    key: fs.readFileSync(`./cert/key.pem`),
    cert: fs.readFileSync(`./cert/cert.pem`),
    passphrase: 'eldorado',
},
app
);


server.listen(3000, () =>{
  mongoose.connect('mongodb://localhost:27017/mydb');
  console.log(
    '🚀 Server ready'
  )
  }
)

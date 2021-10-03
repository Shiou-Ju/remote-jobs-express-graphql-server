#  remote-jobs-express-graphql-server

## Instance on Google App Engine
https://remote-openings-graphql-server.de.r.appspot.com/graphql

## Description
Backend APIs to search remote jobs listed on main job-hunting websites.

## APIs for Jobs
### Queries 
  - findById 
  - findByIds 
  - findOne
  - findMany 
  - count  
  - connection 
  - pagination 
### Mutations 
  - createOne 
  - createMany 
  - updateById 
  - updateOne 
  - updateMany 
  - removeById 
  - removeOne 
  - removeMany 

## Under development
`npm run dev` to run server with nodemon.

## Deployment 
### To GCP
#### app.yaml
runtime: nodejs14

env_variables:
  - NODE_ENV: `fill in yours here`
  - MONGO_URI: `fill in yours here`

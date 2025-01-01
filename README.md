# Description
This repository was created using `Express` framework with Typescript.  Here we have one endpoint that draw numbers accordingly a previously *quantity* informed on requisition. The draw is based on rules of Mega Sena of Brazil.

# Endpoints
-`POST`  /generatenumbers  

## Requisition examples
`POST` /generatenumbers
```
curl --location --request POST 'http://localhost:3000/generatenumbers?quantity=6'
```

# Installation
```
npm install
```

# Running the app
## Development
```
npm run start:dev
```




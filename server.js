const express = require('express');
const fetch = require('node-fetch');
const app = express();

// run with nodemon server.js

app.get(`/api/:name`, function (req, res) {
  return res.json('hi jill');
  // if (!req.headers.authorization) {
  //   res.status(401).send('No authorization supplied');
  // } else if (req.headers.authorization !== 'bobafett' && req.headers.authorization !== 'hansolo') {
  //   res.status(401).send('Incorrect authorization header passed');
  // } else {
  //   if (req.accepts('application/json')) {
  //     const name = req.params.name;
  //     fetch('https://swapi.co/api/people').then((swapiRes) => swapiRes.json()).then((swapiJson) => {
  //       const matches = swapiJson.results.filter((person) => person.name.toLowerCase().includes(name.toLowerCase()));
  
  //       if (matches.length < 1) {
  //         res.status(400).send('No characters found that match search');
  //       } else {
  //         const results = matches.map(({name, gender, birth_year}) => {
  //           return {
  //             name,
  //             gender,
  //             birthYear: birth_year,
  //           };
  //         });
          
  //         res.setHeader("content-type", "application/json");

  //         res.json(results.slice(0,9));
  //       }
  //     })
  //     .catch(() => {
  //       res.status(500).send('Could not reach https://swapi.co');
  //     });
  //   } else {
  //     res.status(415).send('Please format your input to application/json');
  //   }
  // }
});

// use port environment variable or default to 8080
// e.g. PORT=7001 npm run server
app.listen(process.env.PORT || 8080);
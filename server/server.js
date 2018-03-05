const express = require('express');
const axios = require('axios');
const geoip = require('geoip-lite');
const logic = require('./utils/logic');

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    let ip = "109.173.219.206";
    // let ip = req.connection.remoteAddress;
    req.location = geoip.lookup(ip).country;
    next();
});

app.get('/repositories/:owner/:repo', (req, res) => {
    console.log(req.location);

    let owner = req.params.owner;
    let repo = req.params.repo;

    axios.get(`https://api.github.com/repos/${owner}/${repo}`)
        .then((response) => {
            res.send(JSON.stringify(logic.FormResponse(req, response)));
        }).catch((error) => {
            console.log('inside catch');
            if (error.response.status === 404) {
                console.log(error.response.status);
                res.status(404).send("Nothing found");
            } else {
                res.send("OMG dunno that error");
            };
        });
});

app.listen(PORT, () => {
    console.log(`up and running on ${PORT}`);
});
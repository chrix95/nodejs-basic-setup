const express = require("express");
const apiRouter = express.Router();
const utilsController = require("../../controller/utils");
const initiateRequest = require("../../functions");

apiRouter.get("/", async ( req, res) => {
    // Read variables sent via POST from our SDK
    const { sessionId } = req.body
    console.log("###################", req.body)
    console.log("###################", process.env.BASE_URL)
    res.status(200).send({ message: 'Welcome to the API root route' })
})

module.exports = {
    apiRouter
} 
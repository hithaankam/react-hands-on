import express from "express";
import {WebSocketServer} from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("server is listening...")
})
const wss = new WebSocketServer({server});
wss.on("connection", (ws) =>{
    ws.on("message", (msg) => {
        console.log("data recieved: %s", msg);
        ws.send("thanks for the message");

    })
})
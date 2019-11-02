# gRPC implementation using Node.js

## What is gRPC

gRPC (gRPC Remote Procedure Calls) is an open source remote procedure call (RPC) system initially developed at Google. It uses HTTP/2 for transport, Protocol Buffers as the interface description language, and provides features such as authentication, bidirectional streaming and flow control, blocking or nonblocking bindings, and cancellation and timeouts.

You can read more about grpc [here](https://grpc.io)
## Introduction
It's a basic Hello World grpc Api where we have a [server](./src/server.js) and a [client](./src/client.js). To run the application first boot up the server by running the `server.js` file. When server is up and running, we can run the client application to send request to server and get response. Steps are as follows
Open an instance of terminal and run the following command
```bash
    node ./src/server.js
```
Open another instance of terminal and run the following command
```bash
    node ./src/client.js
```
On running the client file, you'll get the following response
```json
{ "message": "Hello World" }
```

const grpc = require('grpc');
const { helloProto } = require('./shared');
const server = new grpc.Server();


server.bind('127.0.0.1:50051',
            grpc.ServerCredentials.createInsecure());
console.log('server is running at http://127.0.0.1:50051');

server.addService(helloProto.Greeter.service,{
    sayHello: (call,callback) => {
        let {name} = call.request;
        callback(null,{
            message: "Hello "+name 
        });
    }
});
server.start()
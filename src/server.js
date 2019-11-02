const grpc = require('grpc');
const { helloProto,serverIP } = require('./shared');
const server = new grpc.Server();


server.bind(serverIP,
            grpc.ServerCredentials.createInsecure());
console.log('server is running at '+serverIP);

server.addService(helloProto.Greeter.service,{
    sayHello: (call,callback) => {
        let {name} = call.request;
        callback(null,{
            message: "Hello "+name 
        });
    }
});
server.start()
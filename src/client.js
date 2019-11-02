const grpc = require('grpc');
const greeterService = grpc.load('hello.proto').GreeterService;

const client = new greeterService('localhost:50051',
                grpc.credentials.createInsecure());

let requestMessage = {
    name: "World"
};
client.sayHello(requestMessage,(error,responseMessage)=>{
    if(!error){
        console.log(responseMessage);
    }else{
        cosnoel.error(error);
    }
});
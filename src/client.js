const grpc = require('grpc');
const { helloProto } = require('./shared');
const greeter = helloProto.Greeter;

const client = new greeter('localhost:50051',
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
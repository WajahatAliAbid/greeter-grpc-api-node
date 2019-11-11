const grpc = require('grpc');
const { helloProto,serverIP } = require('./shared');
const greeter = helloProto.Greeter;

const client = new greeter(serverIP,
                grpc.credentials.createInsecure());

let requestMessage = {
    name: "World"
};
console.log("Calling SayHello Endpoint with name: 'World'")
client.sayHello(requestMessage,(error,responseMessage)=>{
    if(!error){
        console.log(responseMessage);
    }else{
        console.error(error);
    }
});
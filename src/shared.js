const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')
const helloProto = grpc.loadPackageDefinition(protoLoader.loadSync('./hello.proto'))
const serverIP = 'localhost:50051'
module.exports = { helloProto, serverIP };
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')
const helloProto = grpc.loadPackageDefinition(protoLoader.loadSync('./hello.proto'))
module.exports = { helloProto };
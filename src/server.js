const { MongoClient } = require('mongodb')
var config   = require('./config');
const mqtt = require("mqtt");
var mongoUri = 'mongodb://' + config.mongodb.hostname + ':' + config.mongodb.port + '/' + config.mongodb.database;
var date_time = new Date();
const client = new MongoClient(mongoUri);
const database = client.db(config.mongodb.database);

// --------------MQTT PART----------------

var mqttUri  = 'mqtt://' + config.mqtt.hostname + ':' + config.mqtt.port;
const client = mqtt.connect(mqttUri);

client.on("connect", () => {
    client.subscribe("gate/+/status", (err) => {
        if (!err) {
            console.log("Client connected");
        }
    });
});

client.on("message", (topic, message) => {
    // message is Buffer
    console.log(message.toString());
    if (topic === "gate/group1/status") {
        print("gruoup1")
        database.collection(config.mongodb.collection).findOneAndUpdate({
            gate: 1
        },{
            gate: 1,
            status: message.toString(),
            date: date_time
        });
    } else if (topic === "gate/group2/status") {
        print("gruoup2")
        database.collection(config.mongodb.collection).findOneAndUpdate({
            gate: 2
        },{
            gate: 2,
            status: message.toString(),
            date: date_time
        });
    } else if (topic === "gate/group3/status") {
        print("gruoup3")
        database.collection(config.mongodb.collection).findOneAndUpdate({
            gate: 3
        },{
            gate: 3,
            status: message.toString(),
            date: date_time
        });
    }
});


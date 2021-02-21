const { Kafka } = require('kafkajs')

const kafkaInstance = new Kafka({
  clientId: 'test-app',
  brokers: ['kafka1:9092', 'kafka2:9092']
})

module.exports = { kafkaInstance }
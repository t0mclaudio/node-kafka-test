const { kafkaInstance } = require('index.js')

const producer = kafkaInstance.producer()

await producer.connect()
await producer.send({
  topic: 'test-topic',
  messages: [
    {value: 'Hello, world'},
  ],
})

await producer.disconnect()
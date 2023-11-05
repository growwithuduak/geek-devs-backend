const amqp = require('amqplib');

const publishMessage = async (exchange, message) => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertExchange(exchange, 'fanout');
        channel.publish(exchange, '', Buffer.from(message));
        console.log('Message published to RabbitMQ:', message);
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error publishing message to RabbitMQ:', error);
    }
}

module.exports = { publishMessage }
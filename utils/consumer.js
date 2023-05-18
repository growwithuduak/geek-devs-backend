const amqp = require('amqplib');

const exchange = 'userExchange';

const consumeMessages = async () => {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertExchange(exchange, 'fanout');
        const { queue } = await channel.assertQueue('', { exclusive: true });
        channel.bindQueue(queue, exchange, '');

        console.log('Waiting for user creation messages...');

        channel.consume(queue, (message) => {
            if (message.content) {
                const { name, email } = JSON.parse(message.content.toString());
                console.log('Received user creation message:', { name, email });

            }
        }, { noAck: true });
    } catch (error) {
        console.error('Error consuming messages from RabbitMQ:', error);
    }
}

consumeMessages();

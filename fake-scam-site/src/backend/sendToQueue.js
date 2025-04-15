// backend/sendToQueue.js

import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { v4 as uuidv4 } from 'uuid';
import { fromIni } from '@aws-sdk/credential-provider-ini';

const REGION = 'us-east-1';
const QUEUE_URL = 'https://sqs.us-east-1.amazonaws.com/140023383737/Bank_Transactions';

const sqsClient = new SQSClient({
  region: REGION,
  credentials: fromIni({ profile: 'AdministratorAccess-140023383737' })
});

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 30);
}

export async function sendFakeTransaction(data) {
  const itemSlug = slugify(data.item || 'item');
  const nameSlug = slugify(data.name || 'user');
  const date = data.timestamp;

  const messageBody = JSON.stringify({
    transactionId: `${itemSlug}-${uuidv4()}`,
    accountId: `${nameSlug}-${uuidv4()}`,
    amount: 100.5,
    transactionDate: new Date().toISOString(),
    transactionType: 'PURCHASE',
    location: 'New York',
    deviceId: 'device-123',
    ipAddress: '192.168.1.1',
    merchantId: 'totally-safe-website(Bmazon)',
    channel: 'WEB',
    customerAge: 30,
    customerOccupation: 'Engineer',
    transactionDuration: 120,
    loginAttempts: 1,
    accountBalance: 5000.0,
    previousTransactionDate: date,
    phoneNumber: '+17082055170',
    email: data.email,
    transactionStatus: 'PENDING'
  });

  const command = new SendMessageCommand({
    QueueUrl: QUEUE_URL,
    MessageBody: messageBody
  });

  await sqsClient.send(command);
}

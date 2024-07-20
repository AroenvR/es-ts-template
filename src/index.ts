import dotenv from 'dotenv'; dotenv.config();

import { Server } from './server/Server';
import { ContainerDecorator } from './ioc/ContainerDecorator';

const container = new ContainerDecorator({});
const server = new Server({}, container);

server.start();
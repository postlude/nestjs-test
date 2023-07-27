import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';

async function bootstrap() {
	// Initialize cls-hooked
	initializeTransactionalContext();

	// const app = await NestFactory.create<NestFastifyApplication>(
	// 	AppModule,
	// 	new FastifyAdapter()
	// );
	const app = await NestFactory.create(AppModule);

	await app.listen(3000);

	console.log('APP started');
}

bootstrap();

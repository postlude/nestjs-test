import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatbaseModule } from './database/database.module';

@Module({
	imports: [
		// ConfigModule.forRoot({
		// 	envFilePath: ['src/config/local.env'],
		// 	isGlobal: true
		// }),
		// DatbaseModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }

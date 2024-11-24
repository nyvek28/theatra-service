import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {
    const loadedVariables = {
      DB_HOST: configService.get<string>('DB_HOST'),
      DB_NAME: configService.get<string>('DB_NAME'),
      DB_PASSWORD: configService.get<string>('DB_PASSWORD'),
      DB_PORT: configService.get<string>('DB_PORT'),
      DB_USER: configService.get<string>('DB_USER'),
    };

    console.log('Loaded with variables:');
    console.log(loadedVariables);
  }
}

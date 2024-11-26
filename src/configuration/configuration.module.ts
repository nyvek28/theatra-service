import { Module } from '@nestjs/common';
import {
  ConfigModule as NestConfigModule,
  ConfigService as NestConfigService,
} from '@nestjs/config';
import { ConfigurationService } from './configuration.service';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [NestConfigService, ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}

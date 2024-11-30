import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { ConfigurationModule } from 'src/configuration/configuration.module';

@Module({
  providers: [AssetsService],
  imports: [ConfigurationModule],
  exports: [AssetsService],
})
export class AssetsModule {}

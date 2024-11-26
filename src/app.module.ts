import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';
import { OrganizersModule } from './organizers/organizers.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, OrganizersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configuration: ConfigurationService) {
    console.log('App construct');
    this.configuration.logConfig();
  }
}

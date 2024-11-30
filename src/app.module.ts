import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ConfigurationService } from './configuration/configuration.service';
import { OrganizersModule } from './organizers/organizers.module';
import { EventsModule } from './events/events.module';
import { OrdersModule } from './orders/orders.module';
import { TicketsModule } from './tickets/tickets.module';
import { AssetsModule } from './assets/assets.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    OrganizersModule,
    EventsModule,
    OrdersModule,
    TicketsModule,
    AssetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configuration: ConfigurationService) {
    console.log('App construct');
    this.configuration.logConfig();
  }
}

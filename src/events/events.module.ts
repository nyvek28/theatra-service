import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { Tier } from './entities/tier.entity';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tier, Event])],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}

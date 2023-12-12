import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}

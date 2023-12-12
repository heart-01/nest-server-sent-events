import { Observable, interval, map } from 'rxjs';
import { EventsService } from './events.service';
import { Controller, Get, Sse } from '@nestjs/common';

interface MessageEvent {
  data: string | object;
}

@Controller('api')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getHello(): string {
    return this.eventsService.getHello();
  }

  @Sse('events')
  sendEvents(): Observable<MessageEvent> {
    return interval(1000).pipe(
      map((num: Number) => ({
        data: `Count: ${num}`,
      })),
    );
  }
}

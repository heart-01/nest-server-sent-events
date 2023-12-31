import { EventsModule } from './services/events/events.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'NEST_1',
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 5555,
      },
    },
  ]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('NEST_1') private readonly client: ClientProxy,
    @Inject('REDIS') private readonly clientRedis: ClientProxy,
  ) {}

  @Get()
  getHello(): Observable<string> {
    this.client.emit('log', 'this is a test.' );
    this.clientRedis.emit('log', 'hello ~');
    return this.client.send('greet', 'ninghao');
  }
}

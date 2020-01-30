import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('NEST_1') private readonly client: ClientProxy,
  ) {}

  @Get()
  getHello(): Observable<string> {
    return this.client.send('greet', 'ninghao');
  }
}

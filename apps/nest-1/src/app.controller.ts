import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { from } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('greet')
  greet(@Payload() data: string){
    return `hello ${data}`;
  }

  @EventPattern('log')
  log(@Payload() data: string){
    console.log(`Log event: ${data}`);
  };
}

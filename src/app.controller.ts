import { Controller, Get } from '@nestjs/common';
import { AppService, CardItem } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('random-card')
  async getRandomCard(): Promise<CardItem> {
    return this.appService.getRandomCard();
  }
}

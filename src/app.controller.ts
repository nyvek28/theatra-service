import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) {
    this.configService = configService
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  getPing(): string {
    return 'pang';
  }

  @Get('host')
  getHost(): string {
    const host = this.configService.get<string>('DB_HOST');
    const res = host || 'nothing'
    return res
  }
}

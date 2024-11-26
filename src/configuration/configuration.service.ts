import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  readonly DB_HOST: string;
  readonly DB_NAME: string;
  readonly DB_PASSWORD: string;
  readonly DB_PORT: number;
  readonly DB_USER: string;

  constructor(private readonly config: NestConfigService) {
    this.DB_HOST = this.config.get<string>('DB_HOST');
    this.DB_NAME = this.config.get<string>('DB_NAME');
    this.DB_PASSWORD = this.config.get<string>('DB_PASSWORD');
    this.DB_PORT = Number(this.config.get<string>('DB_PORT'));
    this.DB_USER = this.config.get<string>('DB_USER');
  }

  logConfig() {
    console.info({
      DB_HOST: this.DB_HOST,
      DB_NAME: this.DB_NAME,
      DB_PASSWORD: this.DB_PASSWORD,
      DB_PORT: this.DB_PORT,
      DB_USER: this.DB_USER,
    });
  }
}

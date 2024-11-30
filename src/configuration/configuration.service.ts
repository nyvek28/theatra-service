import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  readonly DB_HOST: string;
  readonly DB_NAME: string;
  readonly DB_PASSWORD: string;
  readonly DB_PORT: number;
  readonly DB_USER: string;
  readonly ASSET_REPOSITORY_NAME: string;
  readonly ASSET_REPOSITORY_REGION: string;
  readonly ASSET_REPOSITORY_ACCESS_KEY: string;
  readonly ASSET_REPOSITORY_SECRET_ACCESS_KEY: string;

  constructor(private readonly config: NestConfigService) {
    this.DB_HOST = this.config.get<string>('DB_HOST');
    this.DB_NAME = this.config.get<string>('DB_NAME');
    this.DB_PASSWORD = this.config.get<string>('DB_PASSWORD');
    this.DB_PORT = Number(this.config.get<string>('DB_PORT'));
    this.DB_USER = this.config.get<string>('DB_USER');
    this.ASSET_REPOSITORY_NAME = this.config.get('ASSET_REPOSITORY_NAME');
    this.ASSET_REPOSITORY_REGION = this.config.get('ASSET_REPOSITORY_REGION');
    this.ASSET_REPOSITORY_ACCESS_KEY = this.config.get(
      'ASSET_REPOSITORY_ACCESS_KEY',
    );
    this.ASSET_REPOSITORY_SECRET_ACCESS_KEY = this.config.get(
      'ASSET_REPOSITORY_SECRET_ACCESS_KEY',
    );
  }

  logConfig() {
    console.info({
      DB_HOST: this.DB_HOST,
      DB_NAME: this.DB_NAME,
      DB_PASSWORD: this.DB_PASSWORD,
      DB_PORT: this.DB_PORT,
      DB_USER: this.DB_USER,
      ASSET_REPOSITORY_NAME: this.ASSET_REPOSITORY_NAME,
      ASSET_REPOSITORY_REGION: this.ASSET_REPOSITORY_REGION,
      ASSET_REPOSITORY_ACCESS_KEY: this.ASSET_REPOSITORY_ACCESS_KEY,
      ASSET_REPOSITORY_SECRET_ACCESS_KEY:
        this.ASSET_REPOSITORY_SECRET_ACCESS_KEY,
    });
  }
}

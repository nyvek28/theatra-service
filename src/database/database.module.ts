import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import pg from 'pg';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (config: ConfigurationService) => ({
        type: 'postgres',
        host: config.DB_HOST,
        port: config.DB_PORT,
        database: config.DB_NAME,
        username: config.DB_USER,
        password: config.DB_PASSWORD,
        dialectModule: pg,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

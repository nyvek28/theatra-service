import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { AssetsModule } from 'src/assets/assets.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), AssetsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}

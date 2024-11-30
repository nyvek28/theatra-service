import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { AssetsService } from 'src/assets/assets.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    private readonly assetService: AssetsService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    // Create ticket objects
    const tickets: Partial<Ticket>[] = createOrderDto.holderData.map(
      (holder) => {
        return {
          holderEmail: holder.email,
          holderId: holder.id,
          holderName: holder.name,
          tierId: Number(holder.tierId),
        };
      },
    );

    // Save voucher image
    const voucherImage = await this.assetService.save(
      createOrderDto.voucherImage,
    );

    // Create order object
    const order: Partial<Order> = {
      tickets: tickets as Ticket[],
      status: 'pending',
      voucherImage,
    };

    // Save to database
    const newOrder = await this.orderRepository.save(order);

    // Return created order
    return newOrder;
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

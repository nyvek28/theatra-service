import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';

@Entity()
export class Order extends AbstractEntity<Order> {
  @Column()
  status: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'voucher_image' })
  voucherImage: string;

  @OneToMany(() => Ticket, (ticket) => ticket.id, {
    cascade: true,
  })
  tickets: Ticket[];
}

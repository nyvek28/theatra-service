import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Tier } from 'src/events/entities/tier.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class Ticket extends AbstractEntity<Ticket> {
  @Column({ name: 'holder_name' })
  holderName: string;

  @Column({ name: 'holder_email' })
  holderEmail: string;

  @Column({ name: 'holder_id' })
  holderId: string;

  @Column({ name: 'tier_id' })
  tierId?: number;

  @Column({ name: 'order_id' })
  orderId?: number;

  @ManyToOne(() => Tier, (tier) => tier.tickets)
  @JoinColumn({ name: 'tier_id' })
  tier?: Tier;

  @ManyToOne(() => Order, (order) => order.tickets)
  @JoinColumn({ name: 'order_id' })
  order?: Order;
}

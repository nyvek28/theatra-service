import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Event } from './event.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';

@Entity()
export class Tier extends AbstractEntity<Tier> {
  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Event, (event) => event.tiers)
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @OneToMany(() => Ticket, (ticket) => ticket.id)
  tickets: Ticket[];
}

import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Event } from './event.entity';

@Entity()
export class Tier extends AbstractEntity<Tier> {
  @Column()
  name: string;

  @Column()
  price: number;

  @ManyToOne(() => Event, (event) => event.tiers)
  @JoinColumn({ name: 'event_id' })
  event: Event;
}

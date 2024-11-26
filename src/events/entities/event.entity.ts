import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Organizer } from 'src/organizers/entities/organizer.entity';
import { Tier } from './tier.entity';

@Entity()
export class Event extends AbstractEntity<Event> {
  @Column()
  name: string;

  @Column({ name: 'payment_instruction' })
  paymentInstruction: string;

  @Column('time without time zone', { name: 'start_time' })
  startTime: number;

  @Column('time without time zone', { name: 'end_time' })
  endTime: number;

  @Column()
  location: string;

  @Column({ name: 'organizer_id' })
  organizerId: string;

  @ManyToOne(() => Organizer)
  @JoinColumn({ name: 'organizer_id' })
  organizer: Organizer;

  @OneToMany(() => Tier, (tier) => tier.event)
  tiers: Tier[];
}

import { Entity, Column } from 'typeorm';
import { AbstractEntity } from 'src/database/abstract.entity';
// import { Organizer } from 'src/organizers/entities/organizer.entity';

@Entity()
export class Event extends AbstractEntity<Event> {
  @Column()
  name: string;

  @Column('varchar', { name: 'payment_instruction' })
  paymentInstruction: string;

  @Column('time without time zone', { name: 'start_time' })
  startTime: number;

  @Column('time without time zone', { name: 'end_time' })
  endTime: number;

  @Column()
  location: string;

  // @Column()
  // organizer: Organizer;
  // tiers: Tier[];
}

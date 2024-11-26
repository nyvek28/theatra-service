import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Organizer extends AbstractEntity<Organizer> {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}

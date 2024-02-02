import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('User')
export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  public dob: string;

  @Column({ type: 'varchar', nullable: true })
  public phoneNumber: string;
}

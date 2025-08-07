import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { BaseEntity } from '../../base/base.entity';
import { Operation } from '../domain/operation';

@Entity()
export class OperationEntity extends BaseEntity<OperationEntity> {
  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  name!: string;

  @Column({
    type: 'varchar',
    length: 10,
    name: 'operations_code',
    unique: true,
  })
  operationsCode!: string;

  // operationsHead
  // regions

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;


  toDomain(): Operation {
    return new Operation(
      this.id,
      this.name,
      this.operationsCode
    )
  }
}

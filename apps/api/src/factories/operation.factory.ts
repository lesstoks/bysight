import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-factory';
import { faker } from '@faker-js/faker';
import { OperationEntity } from '../modules/operations/infrastructure/operation.entity';

import { DataSource } from 'typeorm';

export class OperationFactory extends Factory<OperationEntity> {
  protected entity = OperationEntity;
  protected dataSource: DataSource;

  protected override attrs(): FactorizedAttrs<OperationEntity> {
    return {
      id: faker.string.uuid(),
      name: faker.lorem.word(4),
      operationsCode: faker.string.alpha(5),
    }
  }
}

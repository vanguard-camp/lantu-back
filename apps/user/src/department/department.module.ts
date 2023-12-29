import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DatabaseModule } from '@comm/comm/database/database.moudle';
import { DepartmentProviders } from './department.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentController],
  providers: [...DepartmentProviders, DepartmentService],
  exports: [DepartmentService],
})
export class DepartmentModule {}

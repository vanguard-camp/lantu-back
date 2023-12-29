import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from '@comm/comm/database/database.moudle';
import { UserProviders } from './user.provider';
import { DepartmentModule } from '../department/department.module';

@Module({
  imports: [forwardRef(() => DatabaseModule), DepartmentModule],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
})
export class UserModule {}

import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { UserService } from './user.service';
import { DatabaseModule } from '@comm/comm/database/database.moudle';

@Module({
  imports: [forwardRef(() => DatabaseModule)],
  controllers: [UserController],
  providers: [...UserProviders, UserService],
  exports: [UserService],
})
export class UserModule {}

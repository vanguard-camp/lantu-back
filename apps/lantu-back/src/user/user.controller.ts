import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { AddUserDto } from './user.dto';
@ApiTags('用户')
@Controller('tuser')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({ summary: '新增用户' })
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOrSave(user);
  }
}

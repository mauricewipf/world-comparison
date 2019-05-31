import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AdminGuard } from '../admin.guard';
import { OwnerGuard } from '../owner.guard';

@Controller('admin')
@UseGuards(AdminGuard)
export class AdminController {

  @Get()
  get(): string {
    return 'Admin Section';
  }

  @Post('createUser')
  @UseGuards(OwnerGuard)
  post(@Body() body: any): string {
    return 'User created';
  }

}

import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {

  @Get()
  get(): string {
    return 'admin section';
  }

}

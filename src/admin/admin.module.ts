import { HttpModule, Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {
}

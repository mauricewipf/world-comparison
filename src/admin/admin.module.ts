import { HttpModule, Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { APP_GUARD } from '@nestjs/core';
import { AdminGuard } from './admin.guard';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [AdminController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AdminGuard,
    },
    AdminService,
  ],
})
export class AdminModule {
}

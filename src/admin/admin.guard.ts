import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    if (request.headers['role'] === 'admin' || request.headers['role'] === 'owner') {
      console.log('Admin access granted');
      return true;
    } else {
      console.log('Admin access denied');
      return false;
    }
  }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    console.log(request.headers['role']);
    if (request.headers['role'] !== undefined) {
      console.log('Logged in');
      return true;
    } else {
      console.log('Not logged in');
      return false;
    }
  }
}

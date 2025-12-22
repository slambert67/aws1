import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'New image pushed from github and also deployed!';
  }
}

import { Injectable, NotFoundException } from "@nestjs/common"

@Injectable()
export class AppService {
  getHello(): string {
    throw new NotFoundException("Hellow World!")
  }
}
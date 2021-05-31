import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findOne() {
    return await this.usersService.fetchOne({ id: 1 });
  }
}

import { Module } from "@nestjs/common";
import { ClientsModule } from '@nestjs/microservices';
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { grpcClientOptions } from '@/options/grpc-client-user.options';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'anhuai.user.grpc',
        ...grpcClientOptions,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AccountService } from './accounts.service';
import { AccountResolver } from './accounts.resolver';
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
  controllers: [],
  providers: [AccountResolver, AccountService],
  exports: [AccountService],
})
export class AccountModule {}

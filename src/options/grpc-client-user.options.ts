import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '202.105.27.66:8621',
    package: 'anhuai.user.grpc',
    protoPath: join(__dirname, '../protos/user/user_account.proto'),
  },
};

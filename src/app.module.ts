import { MiddlewareConsumer, Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { GraphQLMiddleware } from "./common/middleware/graphql.middleware";
import { AccountModule } from "./modules/account/accounts.module";
import CustomScalars from "@/common/graphQLClient/scalar";
import { UsersModule } from "./modules/user/users.module";

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   debug: true,
    //   playground: true,
    //   installSubscriptionHandlers: true,
    //   typePaths: [...CustomScalars.keys(), "./**/**/*.graphql"],
    //   resolvers: {
    //     ...CustomScalars.values(),
    //   },
    // }),
    // AccountModule,
    UsersModule,
  ],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(GraphQLMiddleware).forRoutes('/');
  }
}

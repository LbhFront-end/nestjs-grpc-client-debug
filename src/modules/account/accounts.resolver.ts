import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { AccountService } from "./accounts.service";
import {
  Anhuai_user_grpc_UserAccountItem,
  Anhuai_user_grpc_UserAccountItems,
  Anhuai_user_grpc_UserAccountFormInsertInput,
  Anhuai_user_grpc_UserAccountFormUpdateInput,
  Google_protobuf_Int32Value,
} from "@/schema/user.graphql.schema";

@Resolver("Account")
export class AccountResolver {
  constructor(private accountService: AccountService) {}

  @Query("accounts")
  async accounts(
    @Args("query") query
  ): Promise<Observable<Anhuai_user_grpc_UserAccountItems | any>> {
    return await this.accountService.fetchAll(query);
  }

  @Query("account")
  async account(
    @Args("id") id
  ): Promise<Observable<Anhuai_user_grpc_UserAccountItem | any>> {
    return await this.accountService.fetchOne({ id });
  }
  @Mutation("insertAccount")
  async insert(
    @Args("input") input
  ): Promise<Observable<Anhuai_user_grpc_UserAccountFormInsertInput>> {
    return await this.accountService.insertOne(input);
  }
  @Mutation("updateAccount")
  async update(
    @Args("input") input
  ): Promise<Observable<Anhuai_user_grpc_UserAccountFormUpdateInput>> {
    return await this.accountService.updateOne(input) as any;
  }
  @Mutation("deleteAccount")
  async delete(
    @Args("input") input
  ): Promise<Observable<Google_protobuf_Int32Value>> {
    return await this.accountService.deleteOne(input);
  }
}

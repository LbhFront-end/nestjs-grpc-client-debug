import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable, ReplaySubject } from "rxjs";
import { delay, map, tap, toArray } from "rxjs/operators";
import { anhuai } from "@/interfaces/user/user_account";

@Injectable()
export class UsersService implements OnModuleInit {
  private accountService: any;
  constructor(
    @Inject("anhuai.user.grpc") private readonly client: ClientGrpc
  ) {}

  onModuleInit() {
    this.accountService = this.client.getService<anhuai.user.grpc.UserAccount>(
      "UserAccount"
    );
  }

  fetchAll(
    param: anhuai.user.grpc.UserAccountsQuery
  ): Observable<anhuai.user.grpc.UserAccountItems> {
    return this.accountService.findAll(param);
  }

  fetchOne(
    param: anhuai.user.grpc.UserAccountIdentifier
  ): Observable<anhuai.user.grpc.UserAccountItem> {
    console.log(
      this.accountService
        .findOne(param)
        .toPromise()
        .then((res) => console.log(res))
    );

    // one.pipe(map((item) => console.log(item)));
    return this.accountService.findOne(param);
  }
}

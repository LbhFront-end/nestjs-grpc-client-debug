import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { Observable, ReplaySubject } from "rxjs";
import { delay, map, tap, toArray } from "rxjs/operators";
import { anhuai } from "@/interfaces/user/user_account";
import { google } from "@/interfaces/root/wrappers";

@Injectable()
export class AccountService implements OnModuleInit {
  private accountService: anhuai.user.grpc.UserAccount;
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
  insertOne(
    param: anhuai.user.grpc.UserAccountForm
  ): Observable<anhuai.user.grpc.UserAccountIdentifier> {
    return this.accountService.insert(param);
  }
  updateOne(
    param: anhuai.user.grpc.UserAccountForm
  ): Observable<anhuai.user.grpc.UserAccountIdentifier> {
    return this.accountService.update(param);
  }
  deleteOne(
    param: anhuai.user.grpc.UserAccountIdentifier
  ): Observable<google.protobuf.Int32Value> {
    const subject = new ReplaySubject<anhuai.user.grpc.UserAccountIdentifier>();
    subject.next(param);
    subject.complete();
    return this.accountService.delete(subject.asObservable());
  }
}

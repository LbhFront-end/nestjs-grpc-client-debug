
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Anhuai_user_grpc_Status {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED",
    DELETED = "DELETED"
}

export class SortType {
    key?: string;
    value?: boolean;
}

export class Anhuai_user_grpc_UserAccountFormInsertInput {
    account?: string;
    password?: string;
    nickname?: string;
    imageUrl?: string;
    sex?: number;
    birthday?: DateTime;
    cellphone?: string;
    email?: string;
    groupType?: string;
    groupId?: number;
    wxUnionid?: string;
    status?: Anhuai_user_grpc_Status;
    id?: number;
}

export class Anhuai_user_grpc_UserAccountFormUpdateInput {
    account?: string;
    password?: string;
    nickname?: string;
    imageUrl?: string;
    sex?: number;
    birthday?: DateTime;
    cellphone?: string;
    email?: string;
    groupType?: string;
    groupId?: number;
    wxUnionid?: string;
    status?: Anhuai_user_grpc_Status;
    id: number;
}

export class Anhuai_user_grpc_UserAccountFormDeleteInput {
    id?: number;
}

export class Anhuai_user_grpc_UserAccountsQueryInput {
    page?: number;
    size?: number;
    sort?: SortType[];
}

export class Anhuai_user_grpc_UserAccountIdentifier {
    id?: number;
}

export class Anhuai_user_grpc_UserAccountItem {
    id?: number;
    account?: string;
    password?: string;
    nickname?: string;
    imageUrl?: string;
    sex?: number;
    birthday?: DateTime;
    cellphone?: string;
    email?: string;
    groupType?: string;
    groupId?: number;
    insDate?: DateTime;
    status?: Anhuai_user_grpc_Status;
    wxUnionid?: string;
}

export class Anhuai_user_grpc_UserAccountForm {
    account?: string;
    password?: string;
    nickname?: string;
    imageUrl?: string;
    sex?: number;
    birthday?: DateTime;
    cellphone?: string;
    email?: string;
    groupType?: string;
    groupId?: number;
    wxUnionid?: string;
    status?: Anhuai_user_grpc_Status;
    id?: number;
}

export class Anhuai_user_grpc_UserAccountsQuery {
    page?: number;
    size?: number;
    sort?: String_Boolean_map[];
}

export class String_Boolean_map {
    key?: string;
    value?: boolean;
}

export class Anhuai_user_grpc_UserAccountItems {
    page?: number;
    size?: number;
    items?: Anhuai_user_grpc_UserAccountItem[];
}

export class Google_protobuf_Timestamp {
    seconds?: number;
    nanos?: number;
}

export class Google_protobuf_DoubleValue {
    value?: number;
}

export class Google_protobuf_FloatValue {
    value?: number;
}

export class Google_protobuf_Int64Value {
    value?: number;
}

export class Google_protobuf_UInt64Value {
    value?: number;
}

export class Google_protobuf_Int32Value {
    value?: number;
}

export class Google_protobuf_UInt32Value {
    value?: number;
}

export class Google_protobuf_BoolValue {
    value?: boolean;
}

export class Google_protobuf_StringValue {
    value?: string;
}

export class Google_protobuf_BytesValue {
    value?: string;
}

export abstract class IQuery {
    abstract account(id: string): Anhuai_user_grpc_UserAccountItem | Promise<Anhuai_user_grpc_UserAccountItem>;

    abstract accounts(query?: Anhuai_user_grpc_UserAccountsQueryInput): Anhuai_user_grpc_UserAccountItems | Promise<Anhuai_user_grpc_UserAccountItems>;
}

export abstract class IMutation {
    abstract insertAccount(input?: Anhuai_user_grpc_UserAccountFormInsertInput): Anhuai_user_grpc_UserAccountIdentifier | Promise<Anhuai_user_grpc_UserAccountIdentifier>;

    abstract updateAccount(input?: Anhuai_user_grpc_UserAccountFormUpdateInput): Anhuai_user_grpc_UserAccountIdentifier | Promise<Anhuai_user_grpc_UserAccountIdentifier>;

    abstract deleteAccount(input?: Anhuai_user_grpc_UserAccountFormDeleteInput): Google_protobuf_Int32Value | Promise<Google_protobuf_Int32Value>;
}

export class Anhuai_user_grpc_UserLoginLogIdentifier {
    id?: number;
}

export class Anhuai_user_grpc_UserLoginLogItem {
    id?: number;
    accountId?: number;
    loginDate?: Google_protobuf_Timestamp;
    loginIp?: string;
    region?: string;
}

export class Anhuai_user_grpc_UserLoginLogForm {
    accountId?: number;
    loginDate?: Google_protobuf_Timestamp;
    loginIp?: string;
    region?: string;
    id?: number;
}

export class Anhuai_user_grpc_UserLoginLogsQuery {
    page?: number;
    size?: number;
    sort?: String_Boolean_map[];
}

export class Anhuai_user_grpc_UserLoginLogItems {
    page?: number;
    size?: number;
    items?: Anhuai_user_grpc_UserLoginLogItem[];
}

export type DateTime = Date;

/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from 'grpc';

export namespace anhuai {
    export namespace user {
        export namespace grpc {
            export interface UserLoginLog {
                findOne(data: UserLoginLogIdentifier, metadata?: Metadata): Observable<UserLoginLogItem>;
                findAll(data: UserLoginLogsQuery, metadata?: Metadata): Observable<UserLoginLogItems>;
                insert(data: UserLoginLogForm, metadata?: Metadata): Observable<UserLoginLogIdentifier>;
                update(data: UserLoginLogForm, metadata?: Metadata): Observable<UserLoginLogIdentifier>;
                delete(data: UserLoginLogIdentifier, metadata?: Metadata): Observable<google.protobuf.Int32Value>;
            }
            export interface UserLoginLogIdentifier {
                id?: number;
            }
            export interface UserLoginLogItem {
                // 序号
                id?: number;
                // 账号ID（关联用户帐号）
                accountId?: number;
                // 登录时间
                loginDate?: google.protobuf.Timestamp;
                // 登录ip
                loginIp?: string;
                // 登录地区
                region?: string;
            }
            export interface UserLoginLogForm {
                // 账号ID（关联用户帐号）
                accountId?: number;
                // 登录时间
                loginDate?: google.protobuf.Timestamp;
                // 登录ip
                loginIp?: string;
                // 登录地区
                region?: string;
                // 序号
                id?: number;
            }
            export interface UserLoginLogsQuery {
                page?: number;
                size?: number;
                sort?: { [key: string]: boolean };
            }
            export interface UserLoginLogItems {
                page?: number;
                size?: number;
                items?: grpc.UserLoginLogItem[];
            }
            // 状态
            export enum Status {
                // 已启用
                ENABLED = 0,
                // 已停用
                DISABLED = 1,
                // 已删除
                DELETED = 2,
            }
            // 测试枚举
            export enum Season {
                // 春
                SPRING = 0,
                // 夏
                SUMMER = 1,
                // 秋
                AUTUMN = 2,
                // 冬
                WINTER = 3,
            }
        }
    }
}
export namespace google {
    export namespace protobuf {
        export interface Timestamp {
            seconds?: number;
            nanos?: number;
        }
        export interface DoubleValue {
            value?: number;
        }
        export interface FloatValue {
            value?: number;
        }
        export interface Int64Value {
            value?: number;
        }
        export interface UInt64Value {
            value?: number;
        }
        export interface Int32Value {
            value?: number;
        }
        export interface UInt32Value {
            value?: number;
        }
        export interface BoolValue {
            value?: boolean;
        }
        export interface StringValue {
            value?: string;
        }
        export interface BytesValue {
            value?: Uint8Array;
        }
    }
}


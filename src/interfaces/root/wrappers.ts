/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from 'grpc';

export namespace google {
    export namespace protobuf {
        // Wrapper message for &#x60;double&#x60;.
        // 
        // The JSON representation for &#x60;DoubleValue&#x60; is JSON number.
        export interface DoubleValue {
            // The double value.
            value?: number;
        }
        // Wrapper message for &#x60;float&#x60;.
        // 
        // The JSON representation for &#x60;FloatValue&#x60; is JSON number.
        export interface FloatValue {
            // The float value.
            value?: number;
        }
        // Wrapper message for &#x60;int64&#x60;.
        // 
        // The JSON representation for &#x60;Int64Value&#x60; is JSON string.
        export interface Int64Value {
            // The int64 value.
            value?: number;
        }
        // Wrapper message for &#x60;uint64&#x60;.
        // 
        // The JSON representation for &#x60;UInt64Value&#x60; is JSON string.
        export interface UInt64Value {
            // The uint64 value.
            value?: number;
        }
        // Wrapper message for &#x60;int32&#x60;.
        // 
        // The JSON representation for &#x60;Int32Value&#x60; is JSON number.
        export interface Int32Value {
            // The int32 value.
            value?: number;
        }
        // Wrapper message for &#x60;uint32&#x60;.
        // 
        // The JSON representation for &#x60;UInt32Value&#x60; is JSON number.
        export interface UInt32Value {
            // The uint32 value.
            value?: number;
        }
        // Wrapper message for &#x60;bool&#x60;.
        // 
        // The JSON representation for &#x60;BoolValue&#x60; is JSON &#x60;true&#x60; and &#x60;false&#x60;.
        export interface BoolValue {
            // The bool value.
            value?: boolean;
        }
        // Wrapper message for &#x60;string&#x60;.
        // 
        // The JSON representation for &#x60;StringValue&#x60; is JSON string.
        export interface StringValue {
            // The string value.
            value?: string;
        }
        // Wrapper message for &#x60;bytes&#x60;.
        // 
        // The JSON representation for &#x60;BytesValue&#x60; is JSON string.
        export interface BytesValue {
            // The bytes value.
            value?: Uint8Array;
        }
    }
}

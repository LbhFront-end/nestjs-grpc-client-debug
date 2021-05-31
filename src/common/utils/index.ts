import * as protobuf from "protobufjs";
import * as path from "path";
import long from "long";
import type { Long } from "long";

type Timestamp = {
  seconds?: Long;
  nanos?: number;
};

export enum Anhuai_esr_grpc_Status {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED",
  DELETED = "DELETED",
}

export enum Anhuai_esr_grpc_Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum Anhuai_esr_grpc_ClientType {
  PLATFORM = "PLATFORM",
  EXPORTER = "EXPORTER",
  CONSIGNOR = "CONSIGNOR",
  CARRIER = "CARRIER",
}

export enum Anhuai_esr_grpc_ExporterType {
  FACTORY = "FACTORY",
  MERCHANT = "MERCHANT",
  SOHO = "SOHO",
}

export enum Anhuai_esr_grpc_SaasType {
  COMMUNITY = "COMMUNITY",
  PROFESSIONAL = "PROFESSIONAL",
  ENTERPRISE = "ENTERPRISE",
}

export enum Anhuai_esr_grpc_DefaultView {
  EA = "EA",
  CS = "CS",
  CC = "CC",
  CA = "CA",
  PS = "PS",
  PC = "PC",
  PA = "PA",
  PU = "PU",
}

export enum Anhuai_esr_grpc_InputType {
  APPLY = "APPLY",
  SUPPLY = "SUPPLY",
  INTSERV = "INTSERV",
}

export enum Anhuai_esr_grpc_OwnerType {
  OwnerType_FACTORY = "OwnerType_FACTORY",
  OwnerType_MERCHANT = "OwnerType_MERCHANT",
}

export enum Anhuai_esr_grpc_CheckStep {
  CheckStep_DRAFT = "CheckStep_DRAFT",
  CheckStep_CHECK = "CheckStep_CHECK",
  CheckStep_PASS = "CheckStep_PASS",
  CheckStep_RETURN = "CheckStep_RETURN",
  CheckStep_REJECT = "CheckStep_REJECT",
}

export enum Anhuai_esr_grpc_DecStep {
  DecStep_DRAFT = "DecStep_DRAFT",
  DecStep_CHECK = "DecStep_CHECK",
  DecStep_RETURN = "DecStep_RETURN",
  DecStep_CONFIRM = "DecStep_CONFIRM",
  DecStep_WITHDRAW = "DecStep_WITHDRAW",
  DecStep_DECLARE = "DecStep_DECLARE",
  DecStep_DECLARING = "DecStep_DECLARING",
  DecStep_PASS = "DecStep_PASS",
  DecStep_CLEARANCE = "DecStep_CLEARANCE",
}

export enum Anhuai_esr_grpc_DecType {
  ESRDEC = "ESRDEC",
  OTHERDEC = "OTHERDEC",
}

export enum Anhuai_esr_grpc_ContractType {
  TRADITIONSERVICE = "TRADITIONSERVICE",
  MODERNSERVICE = "MODERNSERVICE",
}

export enum Anhuai_esr_grpc_TaxbackStep {
  TaxbackStep_DRAFT = "TaxbackStep_DRAFT",
  TaxbackStep_CHECK = "TaxbackStep_CHECK",
  TaxbackStep_PASS = "TaxbackStep_PASS",
  TaxbackStep_RETURN = "TaxbackStep_RETURN",
  TaxbackStep_REJECT = "TaxbackStep_REJECT",
  TaxbackStep_INVOICE = "TaxbackStep_INVOICE",
  TaxbackStep_APPLY = "TaxbackStep_APPLY",
  TaxbackStep_ACCEPT = "TaxbackStep_ACCEPT",
  TaxbackStep_FINISH = "TaxbackStep_FINISH",
}

export enum Anhuai_esr_grpc_BillStep {
  BillStep_DRAFT = "BillStep_DRAFT",
  BillStep_CHECK = "BillStep_CHECK",
  BillStep_CONFIRM = "BillStep_CONFIRM",
  BillStep_PAYMENT = "BillStep_PAYMENT",
  BillStep_FINISH = "BillStep_FINISH",
}

export enum Anhuai_esr_grpc_ContractStep {
  DRAFTING = "DRAFTING",
  DRAFTED = "DRAFTED",
  CREATING = "CREATING",
  CREATED = "CREATED",
  SEALING = "SEALING",
  SEALED = "SEALED",
  NULLIFY = "NULLIFY",
  ABNORMAL = "ABNORMAL",
  END = "END",
}

export enum Anhuai_esr_grpc_InfoType {
  TOGGLE = "TOGGLE",
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
  TEXT = "TEXT",
  FILE = "FILE",
}

export enum Anhuai_esr_grpc_FileType {
  PICTURE = "PICTURE",
  VIDEO = "VIDEO",
  DOCUMENT = "DOCUMENT",
}

export enum Anhuai_esr_grpc_PrimType {
  PARTYA = "PARTYA",
  PARTYB = "PARTYB",
}

export enum Anhuai_esr_grpc_Level {
  OPTIONAL = "OPTIONAL",
  MUST = "MUST",
  PI = "PI",
  DEC = "DEC",
  SH = "SH",
  TAXBACK = "TAXBACK",
}

export enum Anhuai_esr_grpc_ChargeType {
  PERCENTAGE = "PERCENTAGE",
  CENTDOLLAR = "CENTDOLLAR",
}

export enum Anhuai_esr_grpc_PaymentStep {
  PaymentStep_DRAFT = "PaymentStep_DRAFT",
  PaymentStep_CHECK = "PaymentStep_CHECK",
  PaymentStep_CONFIRM = "PaymentStep_CONFIRM",
  PaymentStep_PAYMENT = "PaymentStep_PAYMENT",
  PaymentStep_FINISH = "PaymentStep_FINISH",
}

export enum Anhuai_esr_grpc_ServeType {
  DECLARE = "DECLARE",
  AGENT = "AGENT",
  SHIPPING = "SHIPPING",
  TRUCK = "TRUCK",
}

export const transformTimeStamp = (timestamp: Timestamp) => {
  if (timestamp.seconds && timestamp.nanos) {
    return new Date(
      timestamp.seconds.toNumber() * 1000 + ((timestamp.nanos * 1000) % 1e6)
    );
  }
  if (timestamp.seconds) {
    return new Date(timestamp.seconds.toNumber() * 1000);
  }
  return "";
};

const transformStatus = (status: number) => {
  switch (status) {
    case 0:
      return "ENABLED";
    case 1:
      return "DISABLED";
    case 2:
      return "DELETED";
    default:
      return null;
  }
};

const transformSize = (longSize: Long) => longSize.toNumber();

const transformEachKeyValue = (key: string, value: any) => {
  switch (key) {
    case "size":
      return transformSize(value);
    // case "status":
    //   return transformStatus(value);
    case "birthday":
    case "insDate":
      return transformTimeStamp(value);
    default:
      return value;
  }
};

export const transformFormData = (form: any) => {
  const newForm = {};
  if (form) {
    Object.keys(form).forEach((key) => {
      if (
        form[key] instanceof Array &&
        !/imageUrl|regionCode|videoUrl|bannerUrl|logoUrl|imageUrls/.test(key)
      ) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        newForm[key] = transformDate(form[key]);
      } else {
        newForm[key] = transformEachKeyValue(key, form[key]);
      }
    });
  }

  return newForm;
};

export const transformDate = (List: any[]) => {
  if (List && List.length) {
    return List.map((item: any) => transformFormData(item));
  }
  return List;
};

export const formatRequestStatus = (
  status: keyof typeof Anhuai_esr_grpc_Status
) => {
  switch (status) {
    case "ENABLED":
      return 0;
    case "DISABLED":
      return 1;
    case "DELETED":
      return 2;
    default:
      return null;
  }
};

export const formatRequestExporterType = (
  status: keyof typeof Anhuai_esr_grpc_ExporterType
) => {
  switch (status) {
    case "FACTORY":
      return 0;
    case "MERCHANT":
      return 1;
    case "SOHO":
      return 2;
    default:
      return null;
  }
};

export const formatRequestCheckStep = (
  status: keyof typeof Anhuai_esr_grpc_CheckStep
) => {
  switch (status) {
    case "CheckStep_DRAFT":
      return 0;
    case "CheckStep_CHECK":
      return 1;
    case "CheckStep_PASS":
      return 2;
    case "CheckStep_RETURN":
      return 3;
    case "CheckStep_REJECT":
      return 4;
    default:
      return null;
  }
};

export const formatRequestDateToTimeStamp = (dateTime?: Date) => {
  if (dateTime) {
    const root = protobuf.loadSync(path.join(__dirname, "./timestamp.proto"));
    const Timestamp = root.lookupType("google.protobuf.Timestamp");
    const time = new Date(dateTime).getTime();
    return Timestamp.fromObject({
      seconds: time / 1000,
      nanos: (time % 1000) * 1e6,
    }).toJSON();
  }

  return null;
};

export const formatRequestNumberToBigDecimal = (num: number) => ({
  bigDecimal: String(num),
});

export const formatRequestSort = (
  sort: {
    key?: string;
    value?: boolean;
  }[]
) => {
  const result = {};
  sort.forEach((v) => {
    result[v.key] = v.value;
  });
  return result;
};

const formatRequestEachKeyValue = (key: string, value: any) => {
  switch (key) {
    case "size":
    case "page":
    case "id":
      return Number(value);
    case "amt":
      return formatRequestNumberToBigDecimal(value);
    case "sort":
      return formatRequestSort(value);
    case "birthday":
      return formatRequestDateToTimeStamp(value);
    default:
      return value;
  }
};

export const formatRequestFormData = (form: any) => {
  const newForm = {};
  if (form) {
    Object.keys(form).forEach((key) => {
      if (form[key] instanceof Array && !/sort/.test(key)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        newForm[key] = formatRequestDate(form[key]);
      } else {
        newForm[key] = formatRequestEachKeyValue(key, form[key]);
      }
    });
  }

  return newForm;
};

export const formatRequestDate = (List: any[]) => {
  if (List && List.length) {
    return List.map((item: any) => formatRequestFormData(item));
  }
  return List;
};

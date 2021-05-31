import { DateTimeScalar, DateTime } from "./dateTime"
import { EmailAddressScalar, EmailAddress } from "./emailAddress"
import { GUIDScalar, GUID } from "./guid"
import { HexadecimalScalar, Hexadecimal } from "./hexadecimal"
import { HexColorCodeScalar, HexColorCode } from "./hexColorCode"
import { HSLScalar, HSL } from "./hsl"
import { HSLAScalar, HSLA } from "./hsla"
import { IPv4Scalar, IPv4 } from "./ipv4"
import { IPv6Scalar, IPv6 } from "./ipv6"
import { ISBNScalar, ISBN } from "./isbn"
import { MACScalar, MAC } from "./mac"
import { NegativeFloatScalar, NegativeFloat } from "./negativeFloat"
import { NegativeIntScalar, NegativeInt } from "./negativeInt"
import { NonPositiveFloatScalar, NonPositiveFloat } from "./nonPositiveFloat"
import { NonPositiveIntScalar, NonPositiveInt } from "./nonPositiveInt"
import { PhoneNumberScalar, PhoneNumber } from "./phoneNumber"
import { PortScalar, Port } from "./port"
import { PositiveFloatScalar, PositiveFloat } from "./positiveFloat"
import { PositiveIntScalar, PositiveInt } from "./positiveInt"
import { PostalCodeScalar, PostalCode } from "./postalCode"
import { RGBScalar, RGB } from "./rgb"
import { RGBAScalar, RGBA } from "./rgba"
import { UnsignedFloatScalar, UnsignedFloat } from "./unsignedFloat"
import { UnsignedIntScalar, UnsignedInt } from "./unsignedInt"
import { URLScalar, URL } from "./url"

export { regularExpressionFactory } from "./regularExpression"
export { rangeFactory } from "./range"

const _DateTime = DateTime;
const _EmailAddress = EmailAddress;
const _GUID = GUID;
const _Hexadecimal = Hexadecimal;
const _HexColorCode = HexColorCode;
const _HSL = HSL;
const _HSLA = HSLA;
const _IPv4 = IPv4;
const _IPv6 = IPv6;
const _ISBN = ISBN;
const _MAC = MAC;
const _NegativeFloat = NegativeFloat;
const _NegativeInt = NegativeInt;
const _NonPositiveInt = NonPositiveInt;
const _NonPositiveFloat = NonPositiveFloat;
const _PhoneNumber = PhoneNumber;
const _Port = Port;
const _PositiveFloat = PositiveFloat;
const _PositiveInt = PositiveInt;
const _PostalCode = PostalCode;
const _RGB = RGB;
const _RGBA = RGBA;
const _UnsignedFloat = UnsignedFloat;
const _UnsignedInt = UnsignedInt;
const _URL = URL;

export {
  DateTimeScalar,
  DateTime,
  _DateTime,
  EmailAddressScalar,
  EmailAddress,
  _EmailAddress,
  GUIDScalar,
  GUID,
  _GUID,
  HexadecimalScalar,
  Hexadecimal,
  _Hexadecimal,
  HexColorCodeScalar,
  HexColorCode,
  _HexColorCode,
  HSLScalar,
  HSL,
  _HSL,
  HSLAScalar,
  HSLA,
  _HSLA,
  IPv4Scalar,
  IPv4,
  _IPv4,
  IPv6Scalar,
  IPv6,
  _IPv6,
  ISBNScalar,
  ISBN,
  _ISBN,
  MACScalar,
  MAC,
  _MAC,
  NegativeFloatScalar,
  NegativeFloat,
  _NegativeFloat,
  NegativeIntScalar,
  NegativeInt,
  _NegativeInt,
  NonPositiveFloatScalar,
  NonPositiveFloat,
  _NonPositiveFloat,
  NonPositiveIntScalar,
  NonPositiveInt,
  _NonPositiveInt,
  PhoneNumberScalar,
  PhoneNumber,
  _PhoneNumber,
  PortScalar,
  Port,
  _Port,
  PositiveFloatScalar,
  PositiveFloat,
  _PositiveFloat,
  PositiveIntScalar,
  PositiveInt,
  _PositiveInt,
  PostalCodeScalar,
  PostalCode,
  _PostalCode,
  RGBScalar,
  RGB,
  _RGB,
  RGBAScalar,
  RGBA,
  _RGBA,
  UnsignedFloatScalar,
  UnsignedFloat,
  _UnsignedFloat,
  UnsignedIntScalar,
  UnsignedInt,
  _UnsignedInt,
  URLScalar,
  URL,
  _URL
}

export default new Map([
  [DateTimeScalar, DateTime],
  [EmailAddressScalar, EmailAddress],
  [GUIDScalar, GUID],
  [HexadecimalScalar, Hexadecimal],
  [HexColorCodeScalar, HexColorCode],
  [HSLScalar, HSL],
  [HSLAScalar, HSLA],
  [IPv4Scalar, IPv4],
  [IPv6Scalar, IPv6],
  [ISBNScalar, ISBN],
  [MACScalar, MAC],
  [NegativeFloatScalar, NegativeFloat],
  [NegativeIntScalar, NegativeInt],
  [NonPositiveFloatScalar, NonPositiveFloat],
  [NonPositiveIntScalar, NonPositiveInt],
  [PhoneNumberScalar, PhoneNumber],
  [PortScalar, Port],
  [PositiveFloatScalar, PositiveFloat],
  [PositiveIntScalar, PositiveInt],
  [PostalCodeScalar, PostalCode],
  [RGBScalar, RGB],
  [RGBAScalar, RGBA],
  [UnsignedFloatScalar, UnsignedFloat],
  [UnsignedIntScalar, UnsignedInt],
  [URLScalar, URL]
])

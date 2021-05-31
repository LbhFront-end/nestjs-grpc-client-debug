import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";
import { formatRequestFormData } from "../utils";

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { type, data } = metadata;
    if (type === "body" && /query|input/.test(data)) {
      return formatRequestFormData(value);
    }
    return value;
  }
}

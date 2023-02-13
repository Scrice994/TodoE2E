import { Given as _Given } from "@badeball/cypress-cucumber-preprocessor";

export function Given(string: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    return _Given(string, descriptor.value);
  };
}

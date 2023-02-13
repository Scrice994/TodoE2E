import { When as _When } from "@badeball/cypress-cucumber-preprocessor";

export function When(string: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    return _When(string, descriptor.value);
  };
}
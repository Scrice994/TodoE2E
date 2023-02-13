import { Then as _Then } from "@badeball/cypress-cucumber-preprocessor";

export function Then(string: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    return _Then(string, descriptor.value);
  };
}
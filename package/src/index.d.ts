export type Input = string | Record<string, boolean>;

declare const cssClass : (...classes: Input[]) => string | undefined;

export default cssClass;

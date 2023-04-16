type Nullish = null | undefined;
export type Input =
  | string
  | Record<string, boolean | Nullish>
  | boolean
  | number
  | Nullish;

declare const cssClass: (...classes: Input[]) => string | undefined;

export default cssClass;

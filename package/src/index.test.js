import cssClass from "./";

describe("cssClass", () => {
  it("returns undefined when no classes", () => {
    expect(cssClass()).toBeUndefined();
  });

  it("returns undefined when no matching classes", () => {
    expect(cssClass({ foo: false })).toBeUndefined();
  });

  it("returns class hardcoded", () => {
    expect(cssClass("foo")).toBe("foo");
    expect(cssClass("foo bar")).toBe("foo bar");
  });

  it("returns class joined together", () => {
    expect(cssClass("foo", { bar: false })).toBe("foo");
  });

  it("returns class joined together /2", () => {
    expect(cssClass("foo", { bar: true, baz: false })).toBe("foo bar");
  });

  it("returns class joined together /3", () => {
    expect(cssClass({ bar: true, baz: false }, "foo")).toBe("bar foo");
  });

  it("returns class joined together /4", () => {
    expect(cssClass("foo", { bar: true, baz: true })).toBe("foo bar baz");
  });

  it("returns class joined together /5", () => {
    expect(cssClass("foo", { bar: true, baz: false }, "lol", { kuux: false, bang: true })).toBe("foo bar lol bang");
  });

  it("ignores other values", () => {
    // @ts-ignore
    expect(cssClass(null, undefined, 2, false, "")).toBeUndefined();
  });
});

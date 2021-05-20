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
  });

  it("returns class joined together", () => {
    expect(cssClass("foo", { bar: false })).toBe("foo");
  });

  it("returns class joined together /2", () => {
    expect(cssClass("foo", { bar: true, baz: false })).toBe("foo bar");
  });

  it("returns class joined together /3", () => {
    expect(cssClass("foo", { bar: true, baz: true })).toBe("foo bar baz");
  });

  it("returns class joined together /4", () => {
    expect(cssClass("foo", { bar: true, baz: false }, { kuux: false, bang: true })).toBe("foo bar bang");
  });
});

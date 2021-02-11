import { try2Arr, try2Obj, try2Ignore } from "../src/index";

describe("try2Ignore(), no error", () => {
  test("Shoud convert plain function success", async () => {
    const res = try2Ignore(() => {
      return {
        foo: "bar",
      };
    });
    expect(res).toEqual({ foo: "bar" });
  });

  test("Shoud convert promise function success", async () => {
    const res = await try2Ignore(() => {
      return Promise.resolve({
        foo: "bar",
      });
    });
    expect(res).toEqual({ foo: "bar" });
  });

  test("Shoud convert async function success", async () => {
    const res = await try2Ignore(async () => {
      return Promise.resolve(1);
    });
    expect(res).toBe(1);
  });
});

describe("try2Ignore(), error only", () => {
  test("Shoud convert plain function success", async () => {
    const res = try2Ignore(() => {
      throw "foo";
    });
    expect(res).toBe(undefined);
  });

  test("Shoud convert promise function success", async () => {
    const res = await try2Ignore(() => {
      return new Promise((resolve, reject) => {
        reject("foo");
      });
    });
    expect(res).toEqual(undefined);
  });

  test("Shoud convert async function success", async () => {
    const res = await try2Ignore(async () => {
      throw "bar";
    });
    expect(res).toBe(undefined);
  });
});

describe("try2Arr(), no error", () => {
  test("Shoud convert plain function success", async () => {
    const [res] = try2Arr(() => {
      return {
        foo: "bar",
      };
    });
    expect(res).toEqual({ foo: "bar" });
  });

  test("Shoud convert promise function success", async () => {
    const [res] = await try2Arr(() => {
      return Promise.resolve({
        foo: "bar",
      });
    });
    expect(res).toEqual({ foo: "bar" });
  });

  test("Shoud convert async function success", async () => {
    const [res] = await try2Arr(async () => {
      return Promise.resolve(1);
    });
    expect(res).toBe(1);
  });
});

describe("try2Arr(), error only", () => {
  test("Shoud convert plain function success", async () => {
    const [res, err] = try2Arr(() => {
      throw "foo";
    });
    expect(err).toBe("foo");
  });

  test("Shoud convert promise function success", async () => {
    const [res, err] = await try2Arr(() => {
      return new Promise((resolve, reject) => {
        reject("foo");
      });
    });
    expect(err).toEqual("foo");
  });

  test("Shoud convert async function success", async () => {
    const [res, err] = await try2Arr(async () => {
      throw "bar";
    });
    expect(err).toBe("bar");
  });
});

describe("try2Obj(), no error", () => {
  test("Shoud convert plain function success", async () => {
    const { ret } = try2Obj(() => {
      return {
        foo: "bar",
      };
    });
    expect(ret).toEqual({ foo: "bar" });
  });

  test("Shoud convert promise function success", async () => {
    const { ret } = await try2Obj(() => {
      return Promise.resolve({
        foo: "bar",
      });
    });
    expect(ret).toEqual({ foo: "bar" });
  });

  test("Shoud convert async function success", async () => {
    const { ret } = await try2Obj(async () => {
      return Promise.resolve(1);
    });
    expect(ret).toBe(1);
  });
});

describe("try2Obj(), error only", () => {
  test("Shoud convert plain function success", async () => {
    const { ret, err } = try2Obj(() => {
      throw "foo";
    });
    expect(err).toBe("foo");
  });

  test("Shoud convert promise function success", async () => {
    const { ret, err } = await try2Obj(() => {
      return new Promise((resolve, reject) => {
        reject("foo");
      });
    });
    expect(err).toEqual("foo");
  });

  test("Shoud convert async function success", async () => {
    const { ret, err } = await try2Obj(async () => {
      throw "bar";
    });
    expect(err).toBe("bar");
  });
});

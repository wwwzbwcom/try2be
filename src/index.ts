function isPromise<T>(val: any): val is Promise<T> {
  if (Promise.resolve(val) === val) {
    return true;
  }
  return false;
}

type Error = any;

export function try2Ignore(executeFunction: () => never): undefined;
export function try2Ignore<T>(executeFunction: () => Promise<T>): Promise<T> | undefined;
export function try2Ignore<T>(executeFunction: () => T): T | undefined;
export function try2Ignore<T>(executeFunction: () => T | Promise<T>): T | undefined | Promise<T | undefined> {
  try {
    const ret =  executeFunction();
    if(isPromise(ret)) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await ret);
            } catch {
                resolve(undefined);
            }
        });
    }
    else {
        return ret;
    }
  } catch {}
}

export function try2Arr(executeFunction: () => never): [undefined, Error];
export function try2Arr<T>(executeFunction: () => Promise<T>): Promise<[T | undefined, Error]>;
export function try2Arr<T>(executeFunction: () => T): [T | undefined, Error];
export function try2Arr<T>(
  executeFunction: () => T | Promise<T>
): Promise<[T | undefined, Error]> | [T | undefined, Error] {
  try {
    const ret = executeFunction();
    if (isPromise(ret)) {
      return new Promise(async (resovle) => {
        try {
          resovle([(await ret), undefined]);
        } catch (err) {
          resovle([undefined, err]);
        }
      });
    } else {
      return [ret, undefined];
    }
  } catch (err) {
    return [undefined, err];
  }
}

export function try2Obj(executeFunction: () => never): {ret: undefined, err: Error};
export function try2Obj<T>(executeFunction: () => Promise<T>): Promise<{ret: T | undefined, err: Error}>;
export function try2Obj<T>(executeFunction: () => T): {ret: T | undefined, err: Error};
export function try2Obj<T>(
  executeFunction: () => T | Promise<T>
): { ret: T | undefined; err: Error } | Promise<{ ret: T | undefined; err: Error }> {
  try {
    const ret = executeFunction();
    if (isPromise(ret)) {
      return new Promise(async (resovle) => {
        try {
          resovle({ ret: await ret, err: undefined });
        } catch (err) {
          resovle({ ret: undefined, err });
        }
      });
    } else {
      return { ret, err: undefined };
    }
  } catch (err) {
    return { ret: undefined, err };
  }
}

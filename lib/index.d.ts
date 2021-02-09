export declare function try2Ignore<T>(executeFunction: () => T): T | undefined;
export declare function try2Arr<T>(executeFunction: () => T): [T | undefined, any];
export declare function try2Obj<T>(executeFunction: () => T): {
    val: T | undefined;
    err: any;
};

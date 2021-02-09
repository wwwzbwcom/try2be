export function try2Ignore<T>(executeFunction: () => T): T | undefined {
    try {  
        return executeFunction();
    } catch {}
}

export function try2Arr<T>(executeFunction: () => T): [T | undefined, any] {
    try {  
        return [executeFunction(), undefined];
    } catch(err) {
        return [undefined, err]
    }
}

export function try2Obj<T>(executeFunction: () => T): {val:T | undefined, err:any} {
    try {  
        return {val:executeFunction(), err: undefined};
    } catch(err) {
        return {val: undefined, err};
    }
}
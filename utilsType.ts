

export type Pick<T, P extends keyof T> = {
    [k in P]: T[k]
}

export type Omit<T, E extends string|number|symbol> = {
    [k in Exclude<keyof T, E>]: T[k]
}


/**
 * 分布式条件类型 与 非分布式条件类型
 */
export type MyExclude<T, U> = T extends U ? never : T;

// 分布式条件类型
export type IsStringArray<T> = T extends string[] ? true : false;

// 非分布式条件类型 使用[T]、T[]、Promise<T>包裹的条件类型都是非分布式
export type IsStringArrayNone1<T> = T[] extends string[] ? true : false;
export type IsStringArrayNone2<T> = [T] extends [string] ? true : false;
export type IsStringArrayNone3<T> = Promise<T> extends Promise<string> ? true : false;
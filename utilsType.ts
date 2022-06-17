

export type Pick<T, P extends keyof T> = {
    [k in P]: T[k]
}

export type Omit<T, E extends string|number|symbol> = {
    [k in Exclude<keyof T, E>]: T[k]
}
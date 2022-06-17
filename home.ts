import { Equal } from "@type-challenges/utils";

type Pick<T, K extends keyof T> = {
    [p in K]: T[p]
}

type Omit<T, K extends string|number|symbol> = {
    [p in Exclude<keyof T, K>]: T[p];
}

type People = {
    sex: string;
    age: number;
    height: number;
}

type Man = "age"

type Women = {
    sex: string;
    age: number;
    height: number;
    money: number;
}

type res1 = Women extends People ? true : false
type res2 = Man extends "age"|"height" ? true : false
type res3 = Pick<People, "sex"|"age"|"height">

type temp = keyof People;

type ManInPeople = Pick<People, Man>

function showVal(Obj: People, k: Man): Pick<People, Man> {
    return {
        [k]: Obj[k]
    };
}

let Obj: People = {
    sex: 'man',
    age: 18,
    height: 180
}
let k: Man = "age"

console.log(showVal(Obj, k));
// ts是js的超集，所有合法的js代码都是ts代码

import { Equal } from "@type-challenges/utils";

interface IPoint {
    x: number,
    y: number
}

interface IArr<T> {
    [element: number]: T;
    [flag: symbol]: boolean;
}

let p: IPoint = {x: 0, y: 0}

class Point implements IPoint {
    constructor(public x: number, public y: number) {}
}

let person = new Point(1,2);

let s = typeof person;
if(s === "function") {
    console.log(111);
}

type PointX = IPoint['x'];
type stringArr = IArr<string>;
type stringArrElement = stringArr[number];
type stringArrTag = stringArr[symbol];

function booleanLearn() {
    let a = true; // boolean
    let b: boolean = true; // boolean
    let c: true = true; // true
    const e = true; // true
    // let d: true = false;
}

function bigintLearn() {
    let a = 1234n;
    const b = 1234n;
    const c = BigInt("1234");  // 使用构造函数声明的bigint值，即使变量使用const声明也是bigint类型
}

function stringLearn() {
    let a = "1234";
    const b = "1234";
    type Dir = "east" | "south" | "west" | "north";
    type Direction = Dir | Uppercase<Dir> | Capitalize<Dir>;

    function consoleDir(dir: Direction) {
        console.log(dir);
    }
    consoleDir("North");
    // consoleDir("NorTh");

    type rt = XMLHttpRequestResponseType;
}

function symbolLearn() {
    let a = Symbol('a');
    const a1: unique symbol = Symbol('a1'); // unique symbol类型必须使用 const 声明
    const a1x = Symbol('a1');
    // unique symbol没有字面量类型的写法，只能通过typeof获取类型
    type X = Equal<typeof a1, typeof a1x>; // false -> unique symbol是一组类型，表达式的本质是 unique symbol a1 !=== unique symbol a1x

    const a2 = a1;
    type res1 = Equal<typeof a1, typeof a2>; // false 当a1赋值给a2的时候会进行隐式类型拓宽为Symbol，导致a2的类型其实是Symbol类型
    const a3: typeof a1 = a1;
    type res2 = Equal<typeof a1, typeof a3>; // true 可以显示声明a3的类型时unique symbole a1，来让a3和a1是同一种类型

    //Symbol的第一个参数是描述，而不是符号名或者符号ID，所以每次调用Symbol都会返回一个新的Symbol值
    //Symbol.for在全局维护了一个字典序，如果之前有创建过符号就返回已创建的符号
    let c = Symbol('a') === Symbol('a'); // false
    let d = Symbol.for('a') === Symbol.for('a'); // true
}

function objectLearn() {
    type Person = {
        name: string,
        age: number
    }
    type Personkeys = keyof Person;
    type res1 = Equal<Personkeys, "name"|"age">;
}

function arrayLearn() {
    let e = [];
    e.push(1);
    e.push('2');
    return e;
    // 当离开作用域时，ts可以分析代码判断该数组的类型

    // 元组是数组的子类型，在声明元组时必须添加类型注解
    let a: [number] = [1];
    let b: [number, number, string]= [1, 2, '3'];
    // b = [1, 2, 3];

    let c: [number, number?][] = [
        [1.2],
        [1.2, 3],
        // [1, 2, 4]
    ]

    let d: [number, ...string[]] = [1, '2', '3'];
    // [...string[]] === string[]，但是[string, ...string[]] !== string[]，因为[string, ...string[]]要求数组内元素>=1个
}

function enumLearn() {
    // 枚举类型本质上是一种映射关系
    // 枚举值是整数的存在双向映射，枚举值是字符串的不存在反向映射
    // 没有给默认值的枚举值会自动从0开始自增赋值
    enum CJK {
        Chinese,
        Japanese = "JP",
        Korean = 1
    }
    /**
    var CJK;
    (function (CJK) {
        CJK[CJK["Chinese"] = 0] = "Chinese";
        CJK["Japanese"] = "JP";
        CJK[CJK["Korean"] = 1] = "Korean";
    })(CJK || (CJK = {}));
     */
}

let a = window.undefined

type Arrayish = {
    [n: string]: boolean,
}
type A = keyof Arrayish;
let aa: Arrayish = {
    1: true,
    'c': false
}

type NumberArray = Array<number>

class Point1 {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface IPoint1 {
    prototype: {x: number, y: number};
    new(x: number, y: number): {x: number, y: number};
}

type dd = typeof Point1;
type dd1 = keyof dd;

type res3 = Equal<typeof Point1, IPoint1>  // true

type bar = {
    hello: number,
    world: string
}

type foo<T extends string = "hello" | "world"> = {
    [k in T]: k extends "hello" ? number : string
}

type res5 = Equal<bar, foo>;  // true

function mapFunc() {
    type User = {
        id: number;
        name: string,
        age: number
    }

    type OptionalUser = {
        [k in keyof User]? : User[k]
    }

    type NullableUser = {
        [k in keyof User] : User[k] | null;
    }

    type ReadonlyUser = {
        readonly [k in keyof User] : User[k];
    }

    type User2 = {
        -readonly [k in keyof ReadonlyUser] : ReadonlyUser[k];
    }
    type res1 = Equal<User, User2>

    type User3 = {
        [k in keyof OptionalUser]-?: OptionalUser[k];
    }
    type res2 = Equal<User, User3>
}
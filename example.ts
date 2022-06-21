
import { Pick, MyExclude, IsStringArray, IsStringArrayNone1 } from './utilsType'

interface People {
    name: string;
    age: number;
    height: number;
}

type PeopleName = Pick<People, 'name'>;
type PeopleName1 = Omit<People, 'age'|'height'>

type t4 = Exclude<'a'|'b'|'c', 'a'|'b'>;
type t5 = MyExclude<'a'|'b'|'c', 'a'|'b'>;

type t6 = IsStringArrayNone1<1 | 'a'>;
type t7 = IsStringArray<[1]|['a']>;
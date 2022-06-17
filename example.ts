
import { Pick } from './utilsType'

interface People {
    name: string;
    age: number;
    height: number;
}

type PeopleName = Pick<People, 'name'>;

type PeopleName1 = Omit<People, 'age'|'height'>
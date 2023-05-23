// import { Person, generateRandomNumber } from './myModules';
// import { PI as myPY} from './myModules';
import * as myCode from './myModules';

console.log(myCode.PI);

const user: myCode.Person = {
    id: 1,
    name: 'Dominicode'
}

console.log(user);

console.log(myCode.generateRandomNumber());

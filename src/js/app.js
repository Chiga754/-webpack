// import {conf, foo} from './module1';
//* Можно жкспортировать всё при помощи *
import * as mod1 from './module1';
console.log(mod1.conf);
mod1.foo();

import Product from './module2';

console.log(new Product('Apple'));

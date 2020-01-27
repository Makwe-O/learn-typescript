interface Todo {
  football?: number;
  tennis?: number;
}

const name1 = 'Micheal ogala';

const age: number = 1;

const skill: Todo = {
  football: 3,
  tennis: 4
};

//object
const attr: { brother: string; sister: string } = {
  brother: 'Micheal',
  sister: 'blessing'
};

skill.football = 3;

//array
const arr: Array<number> = [1];

const camaro: Car = new Car();

//function

const activity: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1) When using the any
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: string } = JSON.parse(json);
console.log(coordinates.x);

//2) When declaration and initialization is on separate lines
const words = ['red', 'yellow', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  } else {
    foundWord: false;
  }
}

//3) Variable whose value cant be infered or can be multiple datatypes
//Assigning multiple possible types
const values = [-10, 4, 5, 6];
let numAboveZero: boolean | number;
for (let i = 0; i < values.length; i++) {
  if (values[i] < 0) {
    numAboveZero = false;
  } else {
    numAboveZero = values[i];
  }
}

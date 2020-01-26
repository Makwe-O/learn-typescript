//arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

//function declaration
function divide(a: number, b: number): number {
  return a / b;
}

//function expression
const subtract = function subtract(a: number, b: number): number {
  return a - b;
};

//returning void
const logger = (a: string): void => {
  console.log('Logger');
};

const lagosForeCast = {
  date: new Date(),
  description: 'Beautiful overcast'
};

const getLagosForeCast = ({
  date,
  description
}: {
  date: Date;
  description: string;
}): void => {
  console.log(description);
};

getLagosForeCast(lagosForeCast);

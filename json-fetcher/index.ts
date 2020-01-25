import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  completed: boolean;
  title: string;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodos(id, title, completed);
  //   console.log(`${id} - id ${title} - title ${completed} - finished`);
});

const logTodos = (id: number, title: string, completed: boolean) => {
  console.log(`${id} - id ${title} - title ${completed} - finished`);
};

import { Resource, component$, useResource$ } from '@builder.io/qwik';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default component$(() => {
  const todosResource = useResource$<Todo[]>(async () => {
    const response = await fetch('http://localhost:4200/api/todos');
    return response.json();
  });

  /* const todos: Todo[] = [
    {
      id: '1',
      text: 'Learn Qwik',
      completed: false
    },
    {
      id: '2',
      text: 'Learn React',
      completed: false
    }
  ]; */

  return (
    <>
      <div>
        <h1>Todo</h1>
        <Resource
          value={todosResource}
          onResolved={(todos) =>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <span>{todo.text}</span>
                </li>
              ))}
            </ul>
          }
          onPending={() => <span>Loading...</span>}
          onRejected={(error) => <span>Error: {error.message}</span>}
        />
      </div>
    </>
  );
});

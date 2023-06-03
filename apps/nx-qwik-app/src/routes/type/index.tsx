import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { TodoItem } from '../../components/todo-item/todo-item';

export default component$(() => {

  const message = useSignal('Hello');
  const title = useSignal('Title');
  const color = useSignal('blue');

  useTask$(({track}) => {
    track(message);
    if (message.value === 'Hello') {
      color.value = 'red';
    } else {
      color.value = 'blue';
    }
  });

  return (
  <>
  <div>This is the type</div>
  <div>
  <input bind:value={title} type="text" />
    <input type="text" onInput$={
      (event) => {
        message.value = (event.target as HTMLInputElement).value;
      }
    } onKeyUp$={
      (event) => {
        console.log(event.key);
      }
    } name="" id="" />
  </div>
  <TodoItem value={message.value} color={color.value}>
    <span>Projected toto</span>
  </TodoItem>
  <p>{title}</p>
  </>
  );
});

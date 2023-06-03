import { component$, useSignal } from '@builder.io/qwik';
import { TodoItem } from '../../components/todo-item/todo-item';

export default component$(() => {
  const isTodoVisible = useSignal(false);
  return (<>
  <div>
    <button onClick$={() => {
      isTodoVisible.value = !isTodoVisible.value;
    }}>Show</button>
    {isTodoVisible.value ? <div>This is the todo</div> : <div>Not visible</div>}
    <TodoItem value='toto' color='green'>
      <span>Projected stuff</span>
    </TodoItem>
  </div>
  </>);
});

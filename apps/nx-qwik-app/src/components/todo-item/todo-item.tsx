import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './todo-item.scss?inline';

export interface TodoItemProps {
  value: string;
  color: string;
}

export const TodoItem = component$((props: TodoItemProps) => {
  useStylesScoped$(styles);

  return <>
  <div style={'color:' + props.color}><Slot /> : {props.value}</div>
  </>;
});



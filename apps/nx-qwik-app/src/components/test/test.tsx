import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './test.scss?inline';

export const Test = component$(() => {
  useStylesScoped$(styles);

  return <>Test works!</>;
});

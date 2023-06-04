import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import { meuhContextId } from '../../routes/context/meuh-context';
import styles from './inner.scss?inline';

export const Inner = component$(() => {

  useStylesScoped$(styles);
  const meuhSignal = useContext(meuhContextId);

  return (
    <>
      <p>Inner works ! <button onClick$={() => {
        meuhSignal.value = !meuhSignal.value;
      }}>Check Meuh</button></p>
    </>
  );
});

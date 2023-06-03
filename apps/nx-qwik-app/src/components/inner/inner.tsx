import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import styles from './inner.scss?inline';
import { meuhContextId } from '../../routes/context/meuh-context';

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

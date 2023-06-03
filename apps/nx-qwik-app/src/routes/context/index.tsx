import { component$, useContextProvider, useSignal } from '@builder.io/qwik';
import { Inner } from '../../components/inner/inner';
import { meuhContextId } from './meuh-context';

export default component$(() => {
  const isMeuh = useSignal(false);

  useContextProvider(meuhContextId, isMeuh);

  return (
    <>
      <div>This is the context</div>
      <div>
        <Inner />
        {isMeuh.value ? <div>Meuh</div> : <div>Not Meuh</div>}
      </div>
    </>
  );
});

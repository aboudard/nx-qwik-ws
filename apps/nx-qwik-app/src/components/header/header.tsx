import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.scss?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="/" target="_self">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="/todo"
            target="_self">
            Todo
          </a>
        </li>
        <li>
          <a href="/type"
            target="_self">
            Type
          </a>
        </li>
        <li>
          <a href="/context"
            target="_self">
            Context
          </a>
        </li>
        <li>
          <a href="/ajax"
            target="_self">
            Ajax
          </a>
        </li>
      </ul>
    </header>
  );
});

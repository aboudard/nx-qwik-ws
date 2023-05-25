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
          <a
            href="./todo"
            target="_blank"
          >
            Todo
          </a>
        </li>

        
      </ul>
    </header>
  );
});

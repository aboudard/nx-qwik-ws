import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Test } from './test';

test(`[Test Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Test />);
  expect(screen.innerHTML).toContain('Test works!');
});

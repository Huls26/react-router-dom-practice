import { describe, it, expect } from 'vitest';
import { render, screen, userEvent } from './utils/test-utils';
import App from './App';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });

  it('should increment count on click', async () => {
    render(<App />);
    userEvent.click(screen.getByRole('button'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  });

  it('uses flexbox in app header', async () => {
    render(<App />);
    const element = screen.getByRole('banner');
    expect(element.className).toBe('App-header');
    expect(getComputedStyle(element).display).toBe('flex');
  });

  it('valid link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /Vite Docs/ }));
  });
});

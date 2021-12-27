import { render, screen } from '@testing-library/react';
import LoginButton from './LoginButton';

test('Login button should be a button with text inside', () => {
  render(<LoginButton />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Login');
});

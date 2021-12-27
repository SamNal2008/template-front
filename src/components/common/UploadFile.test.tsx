import { render, screen } from '@testing-library/react';
import UploadFile from './UploadFile';

test('Expect button to upload file to be working', () => {
  render(<UploadFile />);
  const button = screen.getByTitle('uploadBtn')
  expect(button).toBeInTheDocument();
});

test('Expect input field to be working', () => {
  render(<UploadFile />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
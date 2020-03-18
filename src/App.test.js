import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header/Header';

test('renders learn react link', () => {
  const header = 'Inbox';
  const { getByText } = render(<Header headline={header} />);
  const linkElement = getByText(header);
  expect(linkElement).toBeInTheDocument();
});

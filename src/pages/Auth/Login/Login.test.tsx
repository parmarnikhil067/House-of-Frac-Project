import { render, screen } from '@testing-library/react';
import Login from '../Login';
import { describe, expect, it } from 'vitest';

describe('Login Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Login />);
    expect(container).not.toBeEmptyDOMElement();
  });

  it('displays the login form text', () => {
    render(<Login />);
    expect(screen.getByText('Login Form')).toBeInTheDocument();
  });
});

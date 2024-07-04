import { render, screen } from '@testing-library/react';
import { Footer } from '@/src/components';

describe('Footer UI', () => {
  it('renders Footer component', () => {
    render(<Footer />);
  });

  const currentYear = new Date().getFullYear();
  it('renders Footer component', () => {
    render(<Footer />);

    expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
  });
});

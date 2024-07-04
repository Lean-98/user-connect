import { render, screen } from '@testing-library/react';
import { About } from '@/src/components';

describe('About Component', () => {
  it('renders Title component within About component', () => {
    render(<About />);

    const titleElement = screen.getByText(/Sobre mí/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders paragraph content correctly', () => {
    render(<About />);

    const paragraphElement = screen.getByText(
      /Culpa laboris fugiat reprehenderit ex mollit exercitation non./i,
    );
    expect(paragraphElement).toBeInTheDocument();
  });
});

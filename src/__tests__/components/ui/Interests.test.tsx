import { render, screen } from '@testing-library/react';
import { Interests } from '@/src/components';

describe('Interests Component', () => {
  it('renders Title component with "Intereses"', () => {
    render(<Interests />);

    const titleElement = screen.getByText(/Intereses/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders all interest items correctly', () => {
    render(<Interests />);

    // Verifica que todos los ítems de intereses estén presentes en el documento
    const interestItems = [
      'In ut adipisicing do nisi aliquip incididunt labore sint.',
      'Fugiat est dolor enim incididunt nisi qui est id sint aute cupidatat occaecat voluptate.',
      'Proident et deserunt sunt et irure mollit sunt.',
      'Aute id est aliqua dolore deserunt duis nostrud occaecat magna ut incididunt eu occaecat ut.',
      'Mollit mollit irure aliquip nulla voluptate consectetur.',
    ];

    interestItems.forEach((item) => {
      const interestElement = screen.getByText(new RegExp(item, 'i'));
      expect(interestElement).toBeInTheDocument();
    });
  });

  it('renders all icons correctly', () => {
    render(<Interests />);

    const iconElements = screen.getAllByTestId('details-icon');
    expect(iconElements.length).toBe(5);
  });
});

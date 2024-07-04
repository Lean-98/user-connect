import { render, screen } from '@testing-library/react';
import { ContactForm } from '@/src/components';
import { Form } from '@/src/components/ui/contactform/Form';

describe('ContactForm Component', () => {
  it('renders Title component with "Contacto"', () => {
    render(<ContactForm />);

    const titleElement = screen.getByText(/Contact/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('render the form component', () => {
    render(<Form />);

    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
});

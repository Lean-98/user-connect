import { render, screen, fireEvent, act } from '@testing-library/react';

import { toast } from 'react-toastify';
import { Form } from '@/src/components/ui/contactform/Form';

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
  ToastContainer: () => <div />,
}));

describe('Form Component', () => {
  it('renders form fields', () => {
    render(<Form />);

    expect(screen.getByPlaceholderText(/nombre/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/correo@hosting.com/i),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/mensaje/i)).toBeInTheDocument();
  });

  //! Mostrar errores de validación al enviar el form vacío
  it('shows validation errors on empty submit', async () => {
    render(<Form />);

    fireEvent.click(screen.getByText(/enviar/i));

    expect(
      await screen.findByText(/¡El nombre es obligatorio!/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/¡Debe ser un correo electrónico válido!/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El mensaje debe tener al menos 20 caracteres/i),
    ).toBeInTheDocument();
  });

  //! Enviar al form con datos válidos y mostrar el toast de éxito
  it('submits the form with valid data and shows success toast', async () => {
    render(<Form />);

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText(/nombre/i), {
        target: { value: 'Marcos Rossetti' },
      });
      fireEvent.input(screen.getByPlaceholderText(/correo@hosting.com/i), {
        target: { value: 'mr@example.com' },
      });
      fireEvent.input(screen.getByPlaceholderText(/mensaje/i), {
        target: { value: 'Hello, this is a message.' },
      });

      fireEvent.click(screen.getByText(/enviar/i));
    });

    expect(toast.success).toHaveBeenCalledWith(
      expect.stringContaining(
        '🎉 ¡Gracias, Marcos Rossetti! Tu mensaje ha sido enviado satisfactoriamente. Nos pondremos en contacto contigo pronto.',
      ),
      expect.objectContaining({
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }),
    );
  });
});

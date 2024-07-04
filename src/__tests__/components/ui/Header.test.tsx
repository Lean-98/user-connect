import { render, screen } from '@testing-library/react';
import { Header } from '@/src/components';

describe('Header Component', () => {
  it('renders the full name user correctly', () => {
    render(<Header />);

    const fullNameElement = screen.getByText(/Alexis Bazan/i);
    expect(fullNameElement).toBeInTheDocument();
  });

  it('renders the profile image with correct alt attribute', () => {
    render(<Header />);

    // Verifica que la imagen de perfil esté presente en el atributos alt correcto
    const profileImage = screen.getByRole('img', { name: /Alexis Bazan/i });
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('alt', 'Alexis Bazan');
  });
});

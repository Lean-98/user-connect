import { render, screen } from '@testing-library/react';
import {
  About,
  ContactForm,
  Footer,
  Header,
  Interests,
} from '@/src/components';
import Home from '../app/page';

describe('Home Page', () => {
  it('render the About component', () => {
    render(<About />);

    const aboutElement = screen.getByRole('about');
    expect(aboutElement).toBeInTheDocument();
  });

  it('render the ContactForm component', () => {
    render(<ContactForm />);

    const contactFormElement = screen.getByRole('contactForm');
    expect(contactFormElement).toBeInTheDocument();
  });

  it('render the Footer component', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('footer');
    expect(footerElement).toBeInTheDocument();
  });

  it('render the Header component', () => {
    render(<Header />);

    const headerElement = screen.getByRole('header');
    expect(headerElement).toBeInTheDocument();
  });

  it('render the Interests component', () => {
    render(<Interests />);

    const interestsElement = screen.getByRole('interests');
    expect(interestsElement).toBeInTheDocument();
  });

  it('renders all sections correctly', () => {
    render(<Home />);

    expect(screen.getByRole('about')).toBeInTheDocument();
    expect(screen.getByRole('contactForm')).toBeInTheDocument();
    expect(screen.getByRole('footer')).toBeInTheDocument();
    expect(screen.getByRole('header')).toBeInTheDocument();
    expect(screen.getByRole('interests')).toBeInTheDocument();
  });
});

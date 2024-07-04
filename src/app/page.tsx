import { About, ContactForm, Footer, Header, Interests } from '../components';

export default function Home() {
  return (
    <main className="transparent">
      <Header />
      <About />
      <Interests />
      <ContactForm />
      <Footer />
    </main>
  );
}

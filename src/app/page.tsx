import Hero from '@/components/Hero/Hero';
import Navigation from '@/components/Navigation/Navigation';
import Ceremony from '@/components/Ceremony/Ceremony';
import Information from '@/components/Information/Information';
import Program from '@/components/Program/Program';
import Accommodation from '@/components/Accommodation/Accommodation';
import FAQ from '@/components/FAQ/FAQ';
import RSVP from '@/components/RSVP/RSVP';
import KnowUs from '@/components/KnowUs/KnowUs';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Navigation />
      <Ceremony />
      <Information />
      <Program />
      <Accommodation />
      <FAQ />
      <RSVP />
      <KnowUs />
      <Contact />
      <Footer />
    </>
  );
} 
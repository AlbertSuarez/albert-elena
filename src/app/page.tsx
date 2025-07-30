import Hero from '@/components/Hero/Hero';
import Ceremony from '@/components/Ceremony/Ceremony';
import FAQ from '@/components/FAQ/FAQ';
import RSVP from '@/components/RSVP/RSVP';
import KnowUs from '@/components/KnowUs/KnowUs';
import Footer from '@/components/Footer/Footer';
import Invitation from '@/components/Invitation/Invitation';
import Accommodation from '@/components/Accommodation/Accommodation';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Navigation /> */}
      <Invitation />
      <Ceremony />
      {/* <Information /> */}
      {/* <Program /> */}
      <Accommodation />
      <FAQ />
      <RSVP />
      <KnowUs />
      {/* <Contact /> */}
      <Footer />
    </>
  );
} 
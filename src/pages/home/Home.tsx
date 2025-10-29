import { Companies } from './sections/companies';
import { Hero } from './sections/hero';
import { OurPackages } from './sections/our-packages';
import { TheProcess } from './sections/the-process';
import { WhyUs } from './sections/why-us';

export const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <TheProcess />
      <WhyUs />
      <OurPackages />
    </>
  );
};

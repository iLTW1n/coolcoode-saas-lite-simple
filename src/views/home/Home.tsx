import { Companies } from './sections/companies';
import { Hero } from './sections/hero';
import { OurPackages } from './sections/our-packages';
import { OurProjects } from './sections/our-projects';
import { Ready } from './sections/ready';
import { TheProcess } from './sections/the-process';
import { WeWork } from './sections/we-work';
import { WhyUs } from './sections/why-us';

export const Home = () => {
  return (
    <>
      <Hero />
      <Companies />
      <TheProcess />
      <OurProjects />
      <WhyUs />
      <WeWork />
      <OurPackages />
      <Ready />
    </>
  );
};

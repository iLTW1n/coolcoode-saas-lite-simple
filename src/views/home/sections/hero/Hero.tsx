import { Button } from '@/components/button';

export const Hero = () => {
  return (
    <div
      className='
        bg-[#f8f8f8] py-16 md:py-20
      '
    >
      <section
        className='
          container flex flex-col
          text-center
          items-center justify-center
        '
      >
        <h1
          className='
            text-3xl font-semibold mb-6 max-w-lg md:text-5xl
          '
        >
          We craft minimum viable <span className='border-b-6 border-[#b2ff42]'>SaaS</span> products
        </h1>
        <p className='max-w-sm mb-6 md:mb-10'>
          Helping founders bring their product to life, attract early users, and validate their
          idea.
        </p>
        <Button>See packages</Button>
      </section>
    </div>
  );
};

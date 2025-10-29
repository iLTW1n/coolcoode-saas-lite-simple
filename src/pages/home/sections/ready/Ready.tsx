import { Button } from '@/components/button';

export const Ready = () => {
  return (
    <div
      className='
        py-16
        md:py-20
      '
    >
      <section
        className='
          container
        '
      >
        <div
          className='
            flex flex-col gap-6 py-6
            bg-[#f8f8f8]
            rounded-md
            items-center
            md:flex-row md:justify-around md:p-16
          '
        >
          <p className='font-semibold text-xl md:text-3xl'>
            Ready to bring you <span className='underline'>idea</span> to life?
          </p>
          <Button size='large'>See packages</Button>
        </div>
      </section>
    </div>
  );
};

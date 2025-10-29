import { Button } from '@/components/button';
import { Check, Logs } from 'lucide-react';

const items = [
  {
    title: 'Value the lean startup',
    description: 'You focus on effective products',
  },
  {
    title: 'Understand their idea',
    description: 'You know the problem & audience',
  },
  {
    title: 'Are non-technical',
    description: 'Your specialties are elsewhere',
  },
];

export const WeWork = () => {
  return (
    <div
      className='
        py-16
        md:py-20
      '
    >
      <section
        className='
          container flex flex-col
          text-center
          items-center
        '
      >
        <h2
          className='
            mb-10
            font-semibold text-2xl
            md:mb-20 md:text-3xl
          '
        >
          We work with founders who:
        </h2>

        <div
          className='
            grid
            w-full
            p-8
            bg-[#f8f8f8]
            rounded-md
            gap-10
            md:grid-cols-3
            md:p-16
          '
        >
          {items.map((item, index) => (
            <div
              key={index}
              className='
                flex flex-col
                items-center
              '
            >
              <span
                className='
                  p-2 mb-4
                  bg-[#b2ff42]
                  rounded-md
                '
              >
                <Logs size={16} />
              </span>
              <h5
                className='
                  font-semibold
                '
              >
                {item.title}
              </h5>
              <p
                className='
                  text-neutral-800
                '
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

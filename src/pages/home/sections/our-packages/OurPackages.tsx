import { Button } from '@/components/button';
import { Check } from 'lucide-react';

const items = [
  {
    label: 'Prototype',
    time: '2-3 WEEKS',
    salient: false,
    price: '2,500',
    description:
      'Branding and a landing page to help you attract early users, validate demand, and test your riskiest assumptions.',
    benefits: [
      'Logo',
      'Color Palette & Typography',
      'Copywriting',
      'Landing Page',
      'Software Mockups',
      'Email collection',
      'Website analytics',
    ],
  },
  {
    label: 'MVP',
    time: '4-6 WEEKS',
    salient: true,
    price: '7,500',
    description:
      'An MVP web app to validate your product"s value, generate income, and iterate to product-market fit.',
    benefits: [
      'Everything in Prototype',
      'Website (1-3 pages)',
      'Web App (1-5 screens)',
      'User Authentication',
      'Payments',
    ],
  },
];

export const OurPackages = () => {
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
        <span
          className='
            mb-4
            text-xs font-semibold tracking-widest
          '
        >
          OUR PACKAGES
        </span>
        <h2
          className='
            mb-10
            font-semibold text-2xl
            md:mb-20 md:text-3xl
          '
        >
          Packages for ideas at any stage
        </h2>

        <div
          className='
            grid
            text-left
            gap-8
            md:grid-cols-2 md:max-w-3xl md:gap-6
          '
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className='
                  flex flex-col
                  p-6
                  bg-[#f9f7fa]
                  rounded-md
                  relative
                  md:p-8
                '
              >
                {item.salient && (
                  <span
                    className='
                      inline-block
                      px-2 py-1
                      text-xs font-semibold tracking-widest
                      bg-[#b2ff42]
                      rounded-full
                      absolute -top-3 left-4
                    '
                  >
                    MOST POPULAR
                  </span>
                )}
                <div
                  className='
                    flex
                    font-semibold text-lg
                    items-center justify-between
                  '
                >
                  {item.label}
                  <span
                    className='
                      text-xs font-semibold tracking-widest text-neutral-500
                    '
                  >
                    {item.time}
                  </span>
                </div>
                <div
                  className='
                    my-8
                    font-semibold text-4xl
                  '
                >
                  ${item.price}
                </div>
                <p
                  className='
                    text-sm font-medium
                  '
                >
                  {item.description}
                </p>
                <ul
                  className='
                    flex flex-col
                    my-8
                    text-sm font-medium
                    gap-4
                  '
                >
                  {item.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className='
                        flex
                        items-center gap-2
                      '
                    >
                      <span
                        className={`
                          p-0.5 rounded-md
                          ${item.salient && !idx ? 'bg-[#b2ff42]' : ''}
                        `}
                      >
                        <Check size={16} />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button
                  className='
                    w-full!
                    mt-auto
                  '
                >
                  Book a call
                </Button>
                <p
                  className='
                    mt-4
                    text-sm text-neutral-500 text-center
                  '
                >
                  Prefer async ? Drop us an{' '}
                  <span
                    className='
                      cursor-pointer
                      underline
                    '
                  >
                    email
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

import { Check, X } from 'lucide-react';

const items = [
  {
    title: 'Freelance/Hires',
    salient: false,
    benefits: [
      {
        icon: <Check size={16} />,
        label: 'Custom product',
      },
      {
        icon: <X size={16} />,
        label: 'Moderately expensive (E12k+)',
      },
      {
        icon: <X size={16} />,
        label: 'Long duration (3+ months)',
      },
      {
        icon: <X size={16} />,
        label: 'Self managed process',
      },
      {
        icon: <X size={16} />,
        label: 'Lack of founder & MVP awareness',
      },
    ],
  },
  {
    title: 'Product Studios',
    salient: false,
    benefits: [
      {
        icon: <Check size={16} />,
        label: 'High and product',
      },
      {
        icon: <X size={16} />,
        label: 'Very expensive (E30k+)',
      },
      {
        icon: <X size={16} />,
        label: 'Long duration (3+ months)',
      },
      {
        icon: <X size={16} />,
        label: 'Intense Process',
      },
      {
        icon: <X size={16} />,
        label: 'Lack of MVP awareness',
      },
    ],
  },
  {
    title: 'Simple Suite',
    salient: true,
    benefits: [
      {
        icon: <Check size={16} />,
        label: 'Effective product',
      },
      {
        icon: <Check size={16} />,
        label: 'Great value (E7.5k)',
      },
      {
        icon: <Check size={16} />,
        label: 'Short duration (6 weeks)',
      },
      {
        icon: <Check size={16} />,
        label: 'Simple process',
      },
      {
        icon: <Check size={16} />,
        label: 'Founder & MVP awareness',
      },
    ],
  },
];

export const WhyUs = () => {
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
          WHY US
        </span>
        <h2
          className='
            mb-10
            font-semibold text-2xl
            md:mb-20 md:text-3xl
          '
        >
          Save time, capital and attention
        </h2>

        <div
          className='
            grid
            w-full
            text-left
            gap-3
            md:grid-cols-3
          '
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className='

                '
              >
                <div
                  className={`
                    py-3 px-4 mb-4
                    font-medium
                    rounded-md
                    ${item.salient ? 'bg-[#b2ff42]' : 'bg-[#f8f7fa]'}
                  `}
                >
                  {item.title}
                </div>
                <ul
                  className='
                    flex flex-col
                    px-4
                    text-sm font-medium
                    gap-3
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
                          ${item.salient ? 'bg-[#b2ff42]' : ''}
                        `}
                      >
                        {benefit.icon}
                      </span>
                      {benefit.label}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

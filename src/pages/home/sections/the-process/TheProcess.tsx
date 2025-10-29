const items = [
  {
    title: 'Research',
    description:
      'We dive into your ideas, learn about your audience, and create a strategy to bring your idea to life.',
  },
  {
    title: 'Branding',
    description:
      'We craft a well-suited and positioned brand so that you can build awareness from day one.',
  },
  {
    title: 'Design',
    description:
      'We design every detail to ensure you showcase your ideas clearly and provide a seamless user experience.',
  },
  {
    title: 'Build',
    description:
      'We code from scratch so you can learn from each user interaction and iterate to product-market fit.',
  },
];

export const TheProcess = () => {
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
          THE PROCESS
        </span>
        <h2
          className='
            font-semibold text-2xl mb-10 md:mb-20
          '
        >
          Built by founders, for founders
        </h2>

        <div
          className='
            grid
            gap-3
            md:grid-cols-4
          '
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className='
                  bg-[#f8f8f8]
                  rounded-md
                  p-8
                  text-left
                  md:p-6
                '
              >
                <div className='flex items-center justify-between mb-16'>
                  <div className='bg-[#b2ff42] font-semibold rounded-lg py-1 px-3'>{index + 1}</div>
                  <span className='text-xs font-semibold tracking-widest text-neutral-500'>WEEK {index + 1}</span>
                </div>
                <h5 className='text-lg font-semibold mb-1'>{item.title}</h5>
                <p className='text-sm'>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

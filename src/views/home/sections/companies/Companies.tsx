import slackImage from '@/assets/slack.svg';
import Image from 'next/image';

export const Companies = () => {
  return (
    <div
      className='
        bg-[#f8f8f8] pb-16
      '
    >
      <section
        className='
          container flex flex-wrap justify-center items-center gap-4 md:gap-8
        '
      >
        <Image
          className='grayscale hover:filter-none'
          src={slackImage.src}
          width={120}
          height={40}
          alt='slack'
        />
        <Image
          className='grayscale hover:filter-none'
          src={slackImage.src}
          width={120}
          height={40}
          alt='slack'
        />
        <Image
          className='grayscale hover:filter-none'
          src={slackImage.src}
          width={120}
          height={40}
          alt='slack'
        />
        <Image
          className='grayscale hover:filter-none'
          src={slackImage.src}
          width={120}
          height={40}
          alt='slack'
        />
        <Image
          className='grayscale hover:filter-none'
          src={slackImage.src}
          width={120}
          height={40}
          alt='slack'
        />
        <Image
          className='grayscale hover:filter-none'
          src={slackImage.src}
          width={120}
          height={40}
          alt='slack'
        />
      </section>
    </div>
  );
};

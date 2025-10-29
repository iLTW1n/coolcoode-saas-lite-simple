'use client';
import slackImage from '@/assets/slack.svg';
import chakraImage from '@/assets/chakra.svg';
import convoImage from '@/assets/convo.svg';
import eazybiImage from '@/assets/eazybi.svg';
import grafanaImage from '@/assets/grafana.svg';
import ironImage from '@/assets/iron.svg';
import jumoImage from '@/assets/jumoworld.svg';
import sonosImage from '@/assets/sonos.svg';
import uqamImage from '@/assets/uqam.svg';
import workatoImage from '@/assets/workato.svg';
import Image from 'next/image';
import { useState } from 'react';

const companies = [
  slackImage.src,
  chakraImage.src,
  convoImage.src,
  eazybiImage.src,
  grafanaImage.src,
  ironImage.src,
  jumoImage.src,
  sonosImage.src,
  uqamImage.src,
  workatoImage.src,
];

export const OurProjects = () => {
  const [active, setActive] = useState(companies[0]);
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
          OUR PROJECTS
        </span>
        <h2
          className='
            mb-10
            font-semibold text-2xl
            md:mb-20 md:text-3xl
          '
        >
          Ideas we&apos;ve helped validate
        </h2>

        <div
          className='
            overflow-auto flex
            w-full
            items-center gap-4
            md:grid md:grid-cols-5
          '
        >
          {companies.map((company) => (
            <Image
              key={company}
              onClick={() => setActive(company)}
              src={company}
              width={120}
              height={40}
              alt={company}
              className={`
                cursor-pointer
                hover:filter-none
                ${active === company ? '' : 'grayscale'}
              `}
            />
          ))}
        </div>

        <div
          className='
            flex
            w-full h-96
            mt-10
            bg-[#f8f8f8]
            items-center justify-center relative
          '
        >
          <span
            className='
              inline-block
              px-2 py-1
              text-xs font-semibold tracking-widest
              bg-[#b2ff42]
              rounded-full
              absolute -top-3 right-4
            '
          >
            PROTOTYPE
          </span>
          <Image src={active} width={120} height={40} alt={active} />
        </div>
      </section>
    </div>
  );
};

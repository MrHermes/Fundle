import Image from 'next/image';
import Link from 'next/link';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

import Typography from '../Typography';

const SocialMedia = [
  { link: ' ', icon: <AiFillFacebook /> },
  { link: ' ', icon: <AiOutlineTwitter /> },
  { link: ' ', icon: <AiOutlineInstagram /> },
  { link: ' ', icon: <AiOutlineWhatsApp /> },
  { link: ' ', icon: <SiGmail /> },
];

function Footer() {
  return (
    <footer className='relative h-[70vh] lg:h-[40vh]'>
      <Image
        src='/images/base footer.svg'
        alt='Footer'
        width={20}
        height={20}
        className='absolute top-16 h-full w-full object-cover object-top'
      />
      <div className='layout absolute left-10 right-10 top-[calc(10rem+4px)] flex h-max flex-row flex-wrap justify-between align-middle lg:top-28'>
        <div>
          <Link href='/'>
            <Typography
              sizeVariant='h2'
              colorVariant='secondary'
              className='font-bold'
            >
              fundle
            </Typography>
          </Link>

          <Typography sizeVariant='c1' colorVariant='secondary'>
            PT Tanda Bakti Nusantara
          </Typography>
          <Typography
            sizeVariant='c2'
            colorVariant='secondary'
            className='font-bold lg:mt-5'
          >
            Head Office
          </Typography>
          <Typography
            sizeVariant='c3'
            colorVariant='secondary'
            className='mb-3'
          >
            Foresta Business Loft 5, Unit 26
            <br />
            Kel. Lengkong Kulon, Kec. Pagedangan, Kab. Tangerang
            <br />
            Banten
          </Typography>
        </div>
        <div className='my-auto mb-6 text-right'>
          <Typography
            sizeVariant='h6'
            colorVariant='secondary'
            className='font-bold'
          >
            Contact us
          </Typography>
          <div className='flex flex-row gap-x-5'>
            {SocialMedia.map((SocialMedia, index) => (
              <Link
                key={index}
                href='${link}'
                className='text-3xl text-white hover:text-primary-300'
              >
                {SocialMedia.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

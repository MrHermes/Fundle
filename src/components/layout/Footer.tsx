// const footerLinks = [
//   { href: '/', icon: 'Route 1' },
//   { href: '/', icon: 'Route 2' },
// ];

import Image from "next/image";
import Typography from "../Typography";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineWhatsApp,  } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import Link from "next/link";

const SocialMedia = [
  {link: ' ', icon: <AiFillFacebook />},
  {link: ' ', icon: <AiOutlineTwitter />},
  {link: ' ', icon: <AiOutlineInstagram />},
  {link: ' ', icon: <AiOutlineWhatsApp />},
  {link: ' ', icon: <SiGmail />}                 
]

function Footer() {
  return (
    <div className="relative h-[75vh]">
      <div className="z-0">
        <Image 
            src={"/images/base footer.jpg"} 
            alt={"Footer"}
            fill
            className="absolute top-0"
        />
      </div>
      <div className="absolute top-1/4 bottom-1/3 z-10 min-w-[calc(100%-8rem)] h-max flex flex-row flex-wrap justify-between mx-16 lg:top-1/3">
        <div>
          <Typography sizeVariant='h1' colorVariant='secondary' className="font-bold">
              Fundle
          </Typography>
          <Typography sizeVariant='c1' colorVariant='secondary'>
              PT Tanda Bakti Nusantara
          </Typography>
          <Typography sizeVariant='c2' colorVariant='secondary' className="font-bold mt-5">
              Head Office
          </Typography>   
          <Typography sizeVariant='c3' colorVariant='secondary' className="mb-3">
              Foresta Business Loft 5, Unit 26<br/>
              Kel. Lengkong Kulon, Kec. Pagedangan, Kab. Tangerang<br/>
              Banten
          </Typography> 
        </div>
        <div className="mx-auto my-auto">
          <Typography sizeVariant='c2' colorVariant='secondary' className="font-bold">
              Contact us
          </Typography>
          <div className="flex flex-row mt-2 gap-x-5">
            {SocialMedia.map(({link, icon}) => (
                <Link key={`${link}${icon}`} href={'${link}'} className='text-3xl text-white hover:text-primary-300'>
                  {icon}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

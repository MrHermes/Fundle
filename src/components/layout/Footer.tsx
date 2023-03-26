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
    <footer className="relative mt-10 h-[70vh] lg:h-[40vh]">
      <div className="overflow-visible">
        <Image 
          src={"/images/base footer.svg"}
          alt={"Footer"}
          width={20}
          height={20}
          className="absolute w-full h-full object-cover object-top"
        />
      </div>
      <div className="layout relative top-1/4 bottom-1/4 h-max flex flex-row flex-wrap justify-between align-middle lg:top-12">
        <div>
          <Typography sizeVariant='h2' colorVariant='secondary' className="font-bold">
              Fundle
          </Typography>
          <Typography sizeVariant='c1' colorVariant='secondary'>
              PT Tanda Bakti Nusantara
          </Typography>
          <Typography sizeVariant='c2' colorVariant='secondary' className="font-bold lg:mt-5">
              Head Office
          </Typography>   
          <Typography sizeVariant='c3' colorVariant='secondary' className="mb-3">
              Foresta Business Loft 5, Unit 26<br/>
              Kel. Lengkong Kulon, Kec. Pagedangan, Kab. Tangerang<br/>
              Banten
          </Typography> 
        </div>
        <div className="my-auto text-right">
          <Typography sizeVariant='h6' colorVariant='secondary' className="font-bold">
              Contact us
          </Typography>
          <div className="flex flex-row gap-x-5">
            {SocialMedia.map(({link, icon}) => (
                <Link key={`${link}${icon}`} href={'${link}'} className='text-3xl text-white hover:text-primary-300'>
                  {icon}
                </Link>
            ))}
          </div>
        </div>
      </div>
      
      
    </footer>
  );
}

export default Footer;

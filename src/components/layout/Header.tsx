// const navLinks = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/Typography";

const NavbarLink = [
  {link: "", title: "Beranda"},
  {link: "", title: "Tentang"},
  {link: "", title: "Layanan"},
  {link: "", title: "Donasi"},
  {link: "", title: "Profil"}
];

function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(true);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const backgroundTransparacyVar = clientWindowHeight / 600;
    
    if (backgroundTransparacyVar < 1)
      setBackgroundTransparacy(true);
    else
      setBackgroundTransparacy(false);
  }, [clientWindowHeight]);

  return( 
    <header className="sticky top-0 z-30 min-h-[4rem]">
      <motion.nav
        initial={{backgroundColor: "rgba(6,163,113,0)"}}
        animate={{backgroundColor: backgroundTransparacy ? "rgba(6,163,113,0)" : "rgba(6,163,113,1)" }} 
        transition={{duration: 1, delay: 0.2, ease: "easeInOut"}}
      >
        <div className="layout flex flex-row flex-wrap justify-between py-6">
          <Image 
            src={"/images/fundle.svg"} 
            alt={"Fundle"}
            width={100}
            height={60}
            className="h-6 w-24"
          />
          <ul className="flex flex-row gap-x-4">
            {NavbarLink.map(({link, title}) => (
              <li key={`${link}${title}`}>
              <Link href={link}>
                  <Typography sizeVariant='c3' colorVariant='secondary'>
                  {title}
                  </Typography>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>    
    </header>
  );
}

export default Header;

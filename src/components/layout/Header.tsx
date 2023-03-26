// const navLinks = [
//   { href: '/', label: 'Route 1' },
//   { href: '/', label: 'Route 2' },
// ];
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/Typography";

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
    <header>
      <div className="sticky top-0 z-30 min-h-[4rem]">
            <motion.div
              initial={{backgroundColor: "rgba(6,163,113,0)"}}
              animate={{backgroundColor: backgroundTransparacy ? "rgba(6,163,113,0)" : "rgba(6,163,113,1)" }} 
              transition={{duration: 1, delay: 0.2, ease: "easeInOut"}}
            >
              <nav className="flex flex-row flex-wrap justify-between py-4 mx-16">
                <Image 
                    src={""} 
                    alt={"Fundle"}
                    width={100}
                />
                <ul className="flex flex-row">
                    <li className="px-2">
                    <Link href={""}>
                        <Typography sizeVariant='c3' colorVariant='secondary'>
                        Beranda
                        </Typography>
                    </Link>
                    </li>
                    <li className="px-2">
                    <Link href={""}>
                        <Typography sizeVariant='c3' colorVariant='secondary'>
                        Tentang
                        </Typography>
                    </Link>
                    </li>
                    <li className="px-2">
                    <Link href={""}>
                        <Typography sizeVariant='c3' colorVariant='secondary'>
                        Layanan
                        </Typography>
                    </Link>
                    </li>
                    <li className="px-2">
                    <Link href={""}>
                        <Typography sizeVariant='c3' colorVariant='secondary'>
                        Donasi
                        </Typography>
                    </Link>
                    </li>
                    <li className="px-2">
                    <Link href={""}>
                        <Typography sizeVariant='c3' colorVariant='secondary'>
                        Profil
                        </Typography>
                    </Link>
                    </li>
                </ul>
            </nav>
            </motion.div>   
      </div> 
    </header>
  );
}

export default Header;

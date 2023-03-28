import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import React from "react";
import Image from "next/image";
import Typography from "@/components/Typography";
import { RiHandHeartLine } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';
import { MdExpandMore } from 'react-icons/md'
import { listDonatur } from "@/constant/listDonatur";
import ButtonLink from "@/components/buttons/ButtonLink";
import { floor } from "lodash";
import ProgressBar from "@/components/progressbars/progressBar";

function detailDonation(){
  const data = floor(0.1*100);

  return(
    <Layout>
      <Seo />
        <div className="absolute top-0 bg-primary-100 min-h-[96px] w-full lg:min-h-[72px]"></div>
        <main className="layout mt-14 pt-20 pb-10 px-20 rounded-2xl bg-primary-200">
          <Image 
            src={"/images/dummy-poster.svg"} //Foto_Event
            alt={"Poster Image"}
            width={640}
            height={480}
            className="static w-full"
          />
          {/* Nama_Event */}
          <Typography sizeVariant='h2' colorVariant='primary' className="font-bold my-5 text-wrap">
            Save Malta Children From Hunger
          </Typography>
          <div className="flex flex-col justify-between gap-y-4 lg:flex-row lg:gap-y-0">
            <div>
              {/* Jumlah_Donasi */}
              <Typography sizeVariant='h4' colorVariant='tertiary' className="font-bold">
                Rp. 1000000000
              </Typography>
              {/* Target_Donasi */}
              <Typography sizeVariant='c2' colorVariant='primary' className="">
                Terkumpul dari Rp. 1000000000000
              </Typography>
            </div>

            <div className="flex flex-row justify-center lg:justify-end">
              <div className="flex flex-row justify-center gap-x-5 mx-2 min-w-[10rem] bg-primary-500 shadow-xl rounded-xl font-semibold transition duration-500 hover:scale-110">
                <div className="my-auto text-3xl text-primary-100">
                  <RiHandHeartLine/>
                </div>
                <div className="my-auto">
                  {/* Jumlah_Donatur */}
                  <Typography sizeVariant='c1' colorVariant='primary' className="">
                    4517
                  </Typography>
                  <Typography sizeVariant='c3' colorVariant='primary' className="">
                    Donasi
                  </Typography>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-x-5 mx-2 min-w-[10rem] bg-primary-500 shadow-xl rounded-xl font-semibold transition duration-500 hover:scale-110">
                <div className="my-auto text-3xl text-primary-100">
                  <BiTimeFive />
                </div>
                <div className="my-auto">
                  {/* Sisa_hari -> integer*/}
                  <Typography sizeVariant='c1' colorVariant='primary' className="">
                    12 Hari
                  </Typography>
                  <Typography sizeVariant='c3' colorVariant='primary' className="">
                    Tersisa
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Bar progress uang */}
          <div className="w-full h-2 my-6">
            <ProgressBar progress={data} classProperty="bg-primary-100"/>
          </div>

          <div className="bg-primary-500 p-5 rounded-xl transition duration-500 hover:scale-105">
            {/* Deskripsi Donasi */}
            <Typography sizeVariant='h4' colorVariant='primary' className="font-bold">
              Tentang Donasi
            </Typography>
            <Typography sizeVariant='c4' colorVariant='primary' className="text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit dolorem repellat fugiat debitis nobis cupiditate adipisci!
              Praesentium dicta rerum at laudantium perferendis, sint iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ratione impedit voluptates ullam quae obcaecati odit, non ab facilis eum delectus temporibus perspiciatis nisi nam eveniet minima, ut corrupti accusamus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit dolorem repellat fugiat debitis nobis cupiditate adipisci!
              Praesentium dicta rerum at laudantium perferendis, sint iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ratione impedit voluptates ullam quae obcaecati odit, non ab facilis eum delectus temporibus perspiciatis nisi nam eveniet minima, ut corrupti accusamus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit dolorem repellat fugiat debitis nobis cupiditate adipisci!
              Praesentium dicta rerum at laudantium perferendis, sint iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ratione impedit voluptates ullam quae obcaecati odit, non ab facilis eum delectus temporibus perspiciatis nisi nam eveniet minima, ut corrupti accusamus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit dolorem repellat fugiat debitis nobis cupiditate adipisci!
              Praesentium dicta rerum at laudantium perferendis, sint iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ratione impedit voluptates ullam quae obcaecati odit, non ab facilis eum delectus temporibus perspiciatis nisi nam eveniet minima, ut corrupti accusamus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit dolorem repellat fugiat debitis nobis cupiditate adipisci!
              Praesentium dicta rerum at laudantium perferendis, sint iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ratione impedit voluptates ullam quae obcaecati odit, non ab facilis eum delectus temporibus perspiciatis nisi nam eveniet minima, ut corrupti accusamus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, reprehenderit dolorem repellat fugiat debitis nobis cupiditate adipisci!
              Praesentium dicta rerum at laudantium perferendis, sint iste, aspernatur est, distinctio ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit ratione impedit voluptates ullam quae obcaecati odit, non ab facilis eum delectus temporibus perspiciatis nisi nam eveniet minima, ut corrupti accusamus.
            </Typography>
          </div>
          
          <div className="bg-primary-500 p-10 rounded-xl mt-6">
            <Typography sizeVariant='h6' colorVariant='primary' className="font-bold">
              Donasi
            </Typography>
              {listDonatur.map(({ id, name, money }) => (
                <div key={id} className="bg-primary-200 p-5 my-3 rounded-xl shadow-xl">
                  <Typography sizeVariant='c1' colorVariant='primary' className="font-bold">
                    {name}
                  </Typography>
                  <Typography sizeVariant='c2' colorVariant='primary'>
                    Berhasil melakukan donasi sebesar Rp{money}
                  </Typography>
                </div>
              ))}
          </div>

          <ButtonLink
            href='/'
            className='py-4 px-5 mt-10 mx-auto w-max text-2xl font-extrabold hover:bg-secondary-100/60'
          >
            Donasi Sekarang
          </ButtonLink>
        </main>
    </Layout>
  );
}

export default detailDonation
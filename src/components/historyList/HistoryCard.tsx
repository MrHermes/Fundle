import Image from 'next/image';
import React from 'react';

import Typography from '@/components/Typography';

interface HistoryProps {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  icon: string;
}

function HistoryProps({ id, imgUrl, title, desc, icon }: HistoryProps) {
  return (
    <div className='mr-[4vh] max-w-[89vh] drop-shadow-lg'>
      <Image
        src={imgUrl}
        alt={title}
        width={350}
        height={100}
        id={id}
        className='h-[30vh] rounded-t-[2rem] object-cover'
      />

      <div className='h-[14rem] rounded-b-[2rem] bg-primary-400 p-7 text-center'>
        <Typography sizeVariant='c2' className='pb-4 font-bold'>
          {title}
        </Typography>
        <Typography sizeVariant='c3'>{desc}</Typography>
        <Image
          src={icon}
          alt={icon}
          width={34}
          height={34}
          id={id}
          className='mx-auto pt-[1.5rem]'
        />
      </div>
    </div>
  );
}

export default HistoryProps;

// function HistoryProps({ id, imgUrl, title, desc, icon }: HistoryProps) {
//   return (
//     <div className='max-w-[89vh] rounded-[2rem] bg-primary-400 drop-shadow-lg mr-[4vh]'>
//     <Image
//       src={imgUrl}
//       alt={title}
//       width={250}
//       height={40}
//       id={id}
//       className='h-[30vh] mx-auto mt-[2rem]'
//     />

//     <div className='h-[14rem] rounded-b-[2rem] p-7 text-center'>
//       <Typography sizeVariant='c2' className='pb-4 font-bold'>
//         {title}
//       </Typography>
//       <Typography sizeVariant='c3'>{desc}</Typography>
//       <Image
//         src={icon}
//         alt={icon}
//         width={34}
//         height={34}
//         id={id}
//         className='mx-auto pt-[1.5rem]'
//       />
//     </div>
//   </div>
//   );
// }

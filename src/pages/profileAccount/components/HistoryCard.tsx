import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import {
  AiOutlineDelete,
  AiOutlineRightCircle,
  AiTwotoneDelete,
} from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

import Typography from '@/components/Typography';

interface HistoryProps {
  id: string;
  imgUrl: string;
  title: string;
  desc: string;
  href: string;
  handleClick: () => void;
}

function HistoryProps({
  id,
  imgUrl,
  title,
  desc,
  href,
  handleClick,
}: HistoryProps) {
  return (
    <div className='max-w-[26rem]'>
      <div className='mr-[4vh] drop-shadow-lg'>
        <Image
          src={imgUrl != "https://example.com/foto.jpg" ? imgUrl : "images/dummy-poster.svg"}
          alt={title}
          width={350}
          height={100}
          id={id}
          className='h-[30vh] w-[26rem] rounded-t-[2rem] object-cover'
        />

        <div className='h-[14rem] rounded-b-[2rem] bg-primary-400 p-7 text-center'>
          <Typography sizeVariant='c2' className='pb-4 font-bold line-clamp-2'>
            {title}
          </Typography>
          <Typography sizeVariant='c3' className='min-h-[3rem] line-clamp-2'>
            {desc}
          </Typography>
          <Link href={href} className='mr-6 flex justify-center p-4'>
            <Typography
              sizeVariant='h4'
              colorVariant='tertiary'
              className='text-center'
            >
              <AiOutlineRightCircle className='hover:bounce absolute bottom-7' />
            </Typography>
          </Link>
          <Menu as='div' className='relative inline-block w-full justify-end'>
            <Menu.Button className='inline-flex w-full justify-end'>
              <FiMoreVertical
                className='absolute -mt-7 h-5 w-5 text-primary-100 hover:text-primary-600'
                aria-hidden='true'
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 mt-2 w-44 rounded-md bg-primary-500 shadow-lg focus:outline-none'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleClick}
                      className={`${
                        active ? 'bg-primary-200 ' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <AiTwotoneDelete
                          className='mr-2 h-5 w-5 text-primary-100'
                          aria-hidden='true'
                        />
                      ) : (
                        <AiOutlineDelete
                          className='mr-2 h-5 w-5 text-primary-100'
                          aria-hidden='true'
                        />
                      )}
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default HistoryProps;

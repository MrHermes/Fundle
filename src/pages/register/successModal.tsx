import Link from 'next/link';
import { BsCheckLg } from 'react-icons/bs';

import Typography from '@/components/Typography';

interface Props {
  message: string;
}

const SuccessModal = ({ message }: Props) => {
  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>
        <span className='hidden sm:inline-block sm:h-screen sm:align-middle'></span>
        &#8203;
        <div
          className='inline-block transform overflow-hidden rounded-lg bg-primary-500 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='bg-primary-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='sm:flex sm:items-start'>
              <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-300 sm:mx-0 sm:h-10 sm:w-10'>
                <Typography sizeVariant='c1' colorVariant='tertiary'>
                  <BsCheckLg />
                </Typography>
              </div>
              <div className='mt-3 flex flex-col gap-y-5 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <Typography
                  sizeVariant='c2'
                  className='pt-2 font-medium leading-6'
                  id='modal-headline'
                >
                  Berhasil!
                </Typography>
                <Typography
                  sizeVariant='c3'
                  className='pt-2 font-medium leading-6'
                  id='modal-headline'
                >
                  {message}
                </Typography>
              </div>
            </div>
          </div>
          <div className='bg-primary-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
            <Link
              href='/login'
              className='inline-flex w-full justify-center rounded-md border border-transparent bg-primary-100 px-4 py-2 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-offset-2  sm:ml-3 sm:w-auto'
            >
              <Typography colorVariant='secondary' className='font-medium'>
                OK
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;

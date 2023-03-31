import { MouseEventHandler } from 'react';
import { IoMdClose } from 'react-icons/io';

import ButtonSubmit from '@/components/buttons/ButtonSubmit';
import Typography from '@/components/Typography';

interface Props {
  message: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const FailedModal = ({ message, onClick }: Props) => {
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
                <Typography
                  sizeVariant='c1'
                  colorVariant='tertiary'
                  className='text-red-500'
                >
                  <IoMdClose />
                </Typography>
              </div>
              <div className='mt-3 flex flex-col gap-y-5 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <Typography
                  sizeVariant='c2'
                  className='pt-2 font-medium leading-6'
                  id='modal-headline'
                >
                  Gagal!
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
            <ButtonSubmit
              href='/register'
              onClick={onClick}
              className='px-4 py-2'
            >
              <Typography colorVariant='secondary' className='font-medium'>
                Kembali
              </Typography>
            </ButtonSubmit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailedModal;

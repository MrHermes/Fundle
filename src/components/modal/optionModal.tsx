import Typography from '@/components/Typography';

interface Props {
  message: string;
  handleTrue?: () => void;
  handleFalse?: () => void;
}

const OptionModal = ({ message, handleTrue, handleFalse }: Props) => {
  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <div className='flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0'>
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
          <div className='bg-primary-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-9'>
            <Typography
              sizeVariant='c3'
              className='pt-2 text-center font-medium leading-6'
              id='modal-headline'
            >
              {message}
            </Typography>
          </div>
          <div className='flex justify-between bg-primary-400 py-4 sm:flex sm:px-12'>
            <button onClick={handleTrue}>
              <Typography
                colorVariant='tertiary'
                className='font-medium hover:text-primary-600 hover:drop-shadow-lg'
              >
                Ya
              </Typography>
            </button>
            <button onClick={handleFalse}>
              <Typography
                colorVariant='tertiary'
                className='font-medium hover:text-primary-600 hover:drop-shadow-lg'
              >
                Tidak
              </Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionModal;

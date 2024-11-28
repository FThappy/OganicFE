import { LinkGlobal } from '@/components/LinkGlobal/LinkGlobal';
import Icons from '@/constants/svgIcon';
import { Link } from '@/i18n/routing';

export default async function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-4 py-4'>
      <Icons.NotFound />
      <p className='text-[40px] font-semibold text-gray-9'>Oops! page not found</p>
      <p className='w-[612px] text-center text-gray-5 font-medium'>
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis
      </p>
      <LinkGlobal link={'/'} size='small' className='group z-50 w-full' animation='middle' coverage='360%'>
        <div className='py-[2.5px] flex items-center group-hover:animate-white-to-green animate-green-to-white gap-2'>
          <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Back to Home</p>
        </div>
      </LinkGlobal>
    </div>
  );
}

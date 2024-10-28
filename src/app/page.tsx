// font-[family-name:var(--font-geist-sans)

import { ButtonGlobal } from '@/components/ButtonGlobal/Button';
import { LinkGlobal } from '@/components/LinkGlobal/LinkGlobal';
import { greenDefault } from '@/lib/content';

export default function Home() {
  return (
    <main className={``}>
      <ButtonGlobal size='small' className='group  z-50' animation='middle' backgroundColor={greenDefault}>
        <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Normal</p>
      </ButtonGlobal>
      <ButtonGlobal
        size='small'
        className='group z-50'
        animation='middle'
        backgroundColor={greenDefault}
        primary={false}
      >
        <p className='font-semibold group-hover:animate-green-to-white animate-white-to-green  z-50'>
          Normal ádasd ádasd aaaaaaaaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </ButtonGlobal>
      <LinkGlobal link='/' size='small' className='group  z-50' animation='middle'>
        <p className='font-semibold group-hover:animate-white-to-green animate-green-to-white z-50'>Normal</p>
      </LinkGlobal>
      <LinkGlobal link='/' size='small' className='group  z-50' animation='middle' primary={false}>
        <p className='font-semibold group-hover:animate-green-to-white animate-white-to-green  z-50'>Normal</p>
      </LinkGlobal>
    </main>
  );
}
